const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    name: { type: String, unique: false, required: true },
    cargo: { type: String, unique: false, required: true },
    nascimento: { type: String, unique: false, required: true },
    civil: { type: String, unique: false, required: true },
    sexo: { type: String, unique: false, required: true },
    rua: { type: String, unique: false, required: true },
    numero: { type: String, unique: false, required: true },
    complemento: { type: String, unique: false, required: false },
    bairro: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    estado: { type: String, unique: false, required: true },
    telefone: { type: String, unique: false, required: true },
    celular: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    identidade: { type: String, unique: true, required: true }, 
    cpf: { type: String, unique: true, required: true },
    veiculo: { type: String, unique: false, required: true },
    cnh: { type: String, unique: false, required: true },
    

}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);