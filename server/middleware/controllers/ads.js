let ads = [];

export default {
  async list() {
    this.body = ads;
  },
  async add() {
    ads.push(this.request.body);
    this.body = {ok: true};
  },
  async clear() {
    ads = [];
    this.body = {ok: true};
  }
}
