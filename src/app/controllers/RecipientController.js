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
}

export default new RecipientController();
