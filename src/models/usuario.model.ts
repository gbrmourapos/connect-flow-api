import mongoose from "mongoose";

interface IUsuarioDoc extends mongoose.Document {
  _id: string;
  nome: String;
  data_nascimento: Date;
  senha: string;
  cpf: string;
  telefone: string;
  email: string;
  prontuario: string;
  curso: string;
}

type IUsuario = Omit<IUsuarioDoc, '_id'>;

interface IUsuarioModelInterface extends mongoose.Model<any> {
  build(attr: IUsuario): IUsuarioDoc;
}

const UsuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  data_nascimento: {
    type: Date,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  prontuario: {
    type: String,
    required: true,
  },
  curso: {
    type: String,
    required: true,
  },
});


UsuarioSchema.statics.build = (attr: IUsuario) => {
  return new Usuario(attr);
};

const Usuario = mongoose.model<any, IUsuarioModelInterface>("Usuario", UsuarioSchema);


export { Usuario, IUsuario, IUsuarioDoc };