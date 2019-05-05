
/**
 * Contient tous les paramètres relatifs à l'application
 */
export class Constants {
    /**
     * Validité du token en minute
     */
    public static TOKEN_TIMOUT: number = 10;

    /**
     * Token de l'application
     */
    public static APP_TOKEN: string = "R4F7TTY54==";

    /**
     * Id de l'application Facebook
     */
    public static FACEBOOK_APP_IP: string = "251675342125195";

    /**
     * API Rest Group
     */
    public static GROUP_API_URL: string = "http://localhost:3001";

    /**
     * Prefix de la rest api
     */
    public static API_PREFIX: string = "/_api";

    /**
     * Route de la rest api
     */
    public static API_ROUTES = {
        USER: "/user",
        AUTH: "/auth",
        GROUP: "/group"
    };

    /**
     * Key du local storage de la webtoken
     */
    public static LOCAL_STORAGE_WEBTOKEN_KEY: string = "GroupWebTokenKey";

    /**
     * Key du local storage du facebookId
     */
    public static LOCAL_STORAGE_FACEBOOKID_KEY: string = "GroupFacebookIdKey";

    /**
     * Type de feed dans le fil d'actualité home
     */
    public static FeedEventType = {
        GROUP_JOINED: "JOIN_GROUP",
        GROUP_EVENT: 2,
        CREATE_ALBUM: "CREATE_ALBUM",
        CREATE_EVENT: "CREATE_EVENT"
    };
}