import Recipient from '../models/Recipient';

class RecipientController {
  async show(req, res) {
    const recipientShow = await Recipient.findAll();

    if (recipientShow.length === 0) {
      return res.status(200).json({ message: 'No Users yet' });
    }

    return res.json(recipientShow);
  }
}

export default new RecipientController();
