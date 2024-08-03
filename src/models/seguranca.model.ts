import mongoose from "mongoose";

interface ISegurancaDoc extends mongoose.Document {
  _id: string;
  id_usuario: string;
  primeiro_professor: string;
  disciplina_favorita: string;
  ano_ingresso: string;
}

type ISeguranca = Omit<ISegurancaDoc, '_id'>;

interface ISegurancaModelInterface extends mongoose.Model<any> {
  build(attr: ISeguranca): ISegurancaDoc;
}

const SegurancaSchema = new mongoose.Schema({
  id_usuario: {
    type: String,
    required: true,
  },
  primeiro_professor: {
    type: String,
    required: true,
  },
  disciplina_favorita: {
    type: String,
    required: true,
  },
  ano_ingresso: {
    type: String,
    required: true,
  },
});


SegurancaSchema.statics.build = (attr: ISeguranca) => {
  return new Seguranca(attr);
};

const Seguranca = mongoose.model<any, ISegurancaModelInterface>("Seguranca", SegurancaSchema);


export { Seguranca, ISeguranca, ISegurancaDoc };