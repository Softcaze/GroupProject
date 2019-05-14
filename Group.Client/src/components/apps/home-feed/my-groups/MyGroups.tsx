import * as React from "react";
import { HomeFeedStrings } from "../loc/strings";
import "./MyGroups.scss";
import { IGroup } from "../../../../model/IGroup";
import { GoPlus } from "react-icons/go";
import { FeedService } from "../Feed.service";
import { IUser } from "../../../../model/IUser";
import ReactPlaceholder from "react-placeholder/lib";
import "react-placeholder/lib/reactPlaceholder.css";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Checkbox from '@material-ui/core/Checkbox';

export interface IMyGroupsProps {
    webToken: string;
    facebookId: string;
    currentUser: IUser;
}

export interface IMyGroupsState {
    myGroups: IGroup[];
    isAddGroupVisible: boolean;
    friendsToInvite: IUser[];
}

/**
 * Composant afficher les groupes de l'utilisateur connecté
 */
export default class MyGroups extends React.Component<IMyGroupsProps, IMyGroupsState> {

    constructor(props: IMyGroupsProps) {
        super(props);

        this.state = {
            myGroups: null,
            isAddGroupVisible: false,
            friendsToInvite: [
                {
                    firstname: "Nicolas",
                    lastname: "Cazenave",
                    profil_picture: "https://www.ligue-cancer.net/sites/all/themes/ligue/images/empty_avatar_profil.png",
                    id: "1242423",
                },
                {
                    firstname: "Julie",
                    lastname: "Casasus",
                    profil_picture: "https://www.ligue-cancer.net/sites/all/themes/ligue/images/empty_avatar_profil.png",
                    id: "1242463",
                },
                {
                    firstname: "Kévin",
                    lastname: "Bahurlet",
                    profil_picture: "https://www.ligue-cancer.net/sites/all/themes/ligue/images/empty_avatar_profil.png",
                    id: "1246923",
                },
                {
                    firstname: "Niou",
                    lastname: "Niou",
                    profil_picture: "https://www.ligue-cancer.net/sites/all/themes/ligue/images/empty_avatar_profil.png",
                    id: "12425786",
                },
                {
                    firstname: "Guillaume",
                    lastname: "Cazenave",
                    profil_picture: "https://www.ligue-cancer.net/sites/all/themes/ligue/images/empty_avatar_profil.png",
                    id: "1255423",
                }
            ]
        };

        // on charge les groupes de l'utilisateur
        FeedService.getMyGroups(this.props.webToken, this.props.currentUser.id).then((myGroups: IGroup[]) => {
            this.setState({ myGroups: myGroups });
        });
    }

    public render() {
        return (
            <div className="mygroups-container">
                <div className="mygroups-title">
                    {HomeFeedStrings.MyGroupsTitle}
                </div>
                <div className="mygroups-groupl-list-container">
                    <ReactPlaceholder type='media' rows={4} ready={this.state.myGroups != null}>
                        {this.getMyGroupsList(this.state.myGroups)}
                    </ReactPlaceholder>
                </div>

                <Dialog onClose={this.closeAddGroupDialog.bind(this)} open={this.state.isAddGroupVisible}
                    className="dialog-new-group" maxWidth="sm" fullWidth={true} >
                    <DialogTitle className="new-group-dialog-title">{HomeFeedStrings.CreateNewGroup}</DialogTitle>
                    <DialogContent>{this.getAddNewGroupDialogContent()}</DialogContent>
                    <DialogActions>
                        <Button onClick={this.closeAddGroupDialog.bind(this)} className="diaog-cancel-button">
                            {HomeFeedStrings.Cancel}
                        </Button>
                        <Button onClick={this.closeAddGroupDialog.bind(this)} className="diaog-create-button" autoFocus>
                            {HomeFeedStrings.Create}
                        </Button>
                    </DialogActions>
                </Dialog>
            </div >
        );
    }

    private closeAddGroupDialog() {
        this.setState({ isAddGroupVisible: false });
    }

    private getAddNewGroupDialogContent(): JSX.Element {
        const theme = createMuiTheme({
            palette: {
                primary: red,
            },
        });

        return (
            <div className="dialog-new-group-container">
                <div className="dialog-new-group-picture-picker-container">
                    <div className="dialog-new-group-picture-picker-icon-container">
                        <GoPlus className="dialog-new-group-picture-picker-icon" />
                    </div>
                    <div className="dialog-new-group-picture-picker-description" >
                        <span className="dialog-new-group-picture-picker-description-text">{HomeFeedStrings.ChoosePicture}</span>
                    </div>
                </div>
                <div className="dialog-group-name-container">
                    <MuiThemeProvider theme={theme}>
                        <TextField
                            label={HomeFeedStrings.GroupName}
                            helperText={HomeFeedStrings.GroupNameHelper}
                            className="dialog-group-name-textfield"
                        />
                    </MuiThemeProvider>
                </div>
                <div className="dialog-group-invite-friend">
                    <div className="invite-friend-title">
                        {HomeFeedStrings.InviteFriends}
                    </div>
                    <div className="invite-friend-scroll">
                        {this.state.friendsToInvite.map((friend) => this.getFriendTemplate(friend))}
                    </div>
                </div>
            </div>
        );
    }

    private getFriendTemplate(friend: IUser): JSX.Element {
        return (
            <div key={"friend_" + friend.id} className="friend-container">
                <div className="friend-profil-picture">
                    <img className="friend-profil-picture-image" src={friend.profil_picture} />
                </div>
                <div className="friend-details">
                    <div className="friend-details-name">
                        {friend.firstname} {friend.lastname}
                    </div>
                    <div className="friend-details-additional">
                        {HomeFeedStrings.UsingGroup}
                    </div>
                </div>
                <div className="friend-check">
                    <Checkbox
                        classes={{
                            root: "friend-checkbox"
                        }}
                    />
                </div>
            </div>
        );
    }

    private getMyGroupsList(groups: IGroup[]): JSX.Element {
        if (groups && groups.length > 0) {
            console.log(groups);
            return (
                <div>
                    {
                        groups.map((group) => {
                            return this.getDisplayedGroup(group);
                        })
                    }
                    {
                        this.getDisplayedAddGroup()
                    }
                </div>
            );
        } else {
            return (
                <span>Aucun groupe à afficher</span>
            );
        }
    }

    private getDisplayedGroup(group: IGroup): JSX.Element {
        return (
            <div key={"key_" + group.name.toLowerCase().trim()} className="group-display-container">
                <div className="image-container">
                    <img src={group.profil_picture} />
                </div>
                <div className="name">
                    {group.name}
                </div>
            </div>
        );
    }

    private getDisplayedAddGroup(): JSX.Element {
        return (
            <div className="group-display-container" >
                <div className="create-group-button-container" onClick={() => { this.setState({ isAddGroupVisible: true }); }}>
                    <GoPlus className="create-group-icon" />
                </div>
                <div className="name">
                    {HomeFeedStrings.AddGroup}
                </div>
            </div>
        );
    }
}