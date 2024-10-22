import { profileName, profileJob } from "../utils/constants.js";

export default class UserInfo {
  constructor({ userName, userJob }) {
    this._userName = userName;
    this._userJob = userJob;
  }

  // Retorna o objeto com as informações do usuário
  getUserInfo() {
    return {
      userName: this._userName,
      userJob: this._userJob,
    };
  }

  // Atualiza as informações na página
  setUserInfo() {
    profileName.textContent = this._userName;
    profileJob.textContent = this._userJob;
  }

  // Atualiza as informações do usuário com novos dados
  updateUserInfo(data) {
    this._userName = data.name;
    this._userJob = data.job;
  }
}
