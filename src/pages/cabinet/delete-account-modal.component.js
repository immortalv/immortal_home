import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";
import { Button } from "components/common";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemButton from "@material-ui/core/ListItemButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { deleteUserProfileMutation } from "queries/profiles/use-profiles";

import "./style.scss";
import { clearUserId } from "utils/profile.utils";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DeleteAccountModal = ({ isOpen, onClose, profiles }) => {
  const { getAccessTokenSilently, user } = useAuth0();
  const [checked, setChecked] = useState([]);
  const { mutate } = deleteUserProfileMutation();

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const deleteAccounts = async () => {
    if (!checked.length) return onClose();
    const token = await getAccessTokenSilently();

    checked.forEach(async (id) => {
      mutate({ id, token, userId: clearUserId(user.sub) });
    });

    setChecked([]);
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={() => onClose()}
      aria-labelledby="modal-delete-account"
      className="cabinet__delete-modal"
    >
      <Box sx={style}>
        <h4 className="cabinet__delete__title">
          Оберіть профіль, що хочете назавжди видалити
        </h4>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            maxHeight: 500,
            overflowX: "auto",
            bgcolor: "background.paper",
          }}
        >
          {profiles.map((profile) => {
            return (
              <ListItem key={profile.id} disablePadding>
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(profile.id)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(profile.id) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": profile.id }}
                    />
                  </ListItemIcon>
                  <ListItemText id={profile.id} primary={profile.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <h4 className="cabinet__delete__confirmation">
          Видалити пам’ятну сторінку?
        </h4>
        <div className="cabinet__delete__btn-container">
          <Button
            className="cabinet__delete__btn"
            type="secondary"
            onClick={() => onClose()}
          >
            Ні
          </Button>
          <Button
            className="cabinet__delete__btn"
            type="outline"
            onClick={deleteAccounts}
          >
            Так
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default DeleteAccountModal;
