import IidxId from "../valueObjects/IidxId";
import EmailAddress from "../valueObjects/EmailAddress";

class Player {
    constructor(public playerId: Number, public IidxId: IidxId, public email: EmailAddress) {}
}
export default Player;
