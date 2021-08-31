const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const { name, cargo, nascimento, civil, sexo, complemento, bairro, cep, cidade, estado, telefone, celular, email, identidade, cpf, veiculo, cnh } = req.body;

        const newCandidate = new Candidate();

        newCandidate.name = name;
        newCandidate.cargo = cargo;
        newCandidate.nascimento = nascimento;
        newCandidate.civil = civil;
        newCandidate.sexo = sexo;
        newCandidate.rua = rua;
        newCandidate.numero = numero;
        newCandidate.complemento = complemento;
        newCandidate.bairro = bairro;
        newCandidate.cep = cep;
        newCandidate.cidade = cidade;
        newCandidate.estado = estado;
        newCandidate.telefone = telefone;
        newCandidate.celular = celular;
        newCandidate.email = email;
        newCandidate.identidade = identidade;
        newCandidate.cpf = cpf;
        newCandidate.veiculo = veiculo;
        newCandidate.cnh = cnh;




        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Ocorreu um erro');
            }

            return res.status(200).send(savedCandidate);
        });
    },



};