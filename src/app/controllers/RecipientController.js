import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async show(req, res) {
    const recipientShow = await Recipient.findAll();

    if (recipientShow.length === 0) {
      return res.status(200).json({ message: 'No Users yet' });
    }

    return res.json(recipientShow);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      rua: Yup.string().required(),
      numero: Yup.string().required(),
      complemento: Yup.string().required(),
      estado: Yup.string().required(),
      cidade: Yup.string().required(),
      cep: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'Validation fails' });
    }

    const {
      nome,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
    } = await Recipient.create(req.body);

    return res.json({ nome, rua, numero, complemento, estado, cidade, cep });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string(),
      rua: Yup.string(),
      numero: Yup.string(),
      complemento: Yup.string(),
      estado: Yup.string(),
      cidade: Yup.string(),
      cep: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ Message: 'Invalid information' });
    }

    const recipientId = await Recipient.findByPk(req.params.id);

    if (!recipientId) {
      return res.status(400).json({ Message: 'User not found' });
    }

    const recipientUpdate = await recipientId.update(req.body);

    return res.json(recipientUpdate);
  }

  async delete(req, res) {
    const recipientId = await Recipient.findByPk(req.params.id);

    if (!recipientId) {
      return res.status(400).json({ Message: 'User not found' });
    }

    await recipientId.destroy();

    return res.status(200).json({ Message: 'User has been deleted.' });
  }
}

export default new RecipientController();
