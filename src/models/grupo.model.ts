import mongoose from "mongoose";

interface IGrupoDoc extends mongoose.Document {
  _id: string;
  id_usuario: string;
  nome: string;
  descricao: string;
  data_criacao: Date
}

type IGrupo = Omit<IGrupoDoc, '_id'>;

interface IGrupoModelInterface extends mongoose.Model<any> {
  build(attr: IGrupo): IGrupoDoc;
}

const GrupoSchema = new mongoose.Schema({
  id_usuario: {
    type: String,
    required: true,
  },
  nome: {
    npme: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  data_criacao: {
    type: String,
    required: true,
  },
});


GrupoSchema.statics.build = (attr: IGrupo) => {
  return new Grupo(attr);
};

const Grupo = mongoose.model<any, IGrupoModelInterface>("Grupo", GrupoSchema);


export { Grupo, IGrupo, IGrupoDoc };