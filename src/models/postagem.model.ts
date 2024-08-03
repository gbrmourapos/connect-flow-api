import mongoose from "mongoose";

interface IGrupoDoc extends mongoose.Document {
  _id: string;
  id_usuario: string;
  id_grupo: string;
  data_postagem: Date;
  descricao: string;
}

type IGrupo = Omit<IGrupoDoc, '_id'>;

interface IGrupoModelInterface extends mongoose.Model<any> {
  build(attr: IGrupo): IGrupoDoc;
}

const GrupoSchema = new mongoose.Schema({
});


GrupoSchema.statics.build = (attr: IGrupo) => {
  return new Grupo(attr);
};

const Grupo = mongoose.model<any, IGrupoModelInterface>("Grupo", GrupoSchema);


export { Grupo, IGrupo, IGrupoDoc };