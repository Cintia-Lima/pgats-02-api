/* Bibliotecas */
const request = require ('supertest');
const sinon = require('sinon');
const {expect} = require ('chai');

/* Aplicação */
const app = require ('../../app')

/* Mock */
const transferService = require('../../services/transferService')

/* Testes */
describe('Transfer Controller', () => {
    describe('POST /transfer', () => {
        it ('Quando informo remetente e destinatário inexistente recebo 400', async () => {
            const resposta = await request (app)
                .post('/transfer')
                .send({
                    from: "Cintia",
                    to: "Ana",
                    amount: 1000
                });

            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Sender or recipient not found')
        });
        
       

        it ('Usando Mocks: Quando informo remetente e destinatário inexistente recebo 400 ', async () => {
            // Mocar apenas a função transfer do Service
            const transferServiceMock = sinon.stub(transferService, 'transferValue');
            transferServiceMock.throws(new Error('Sender or recipient not found'));

            const resposta = await request (app)
                .post('/transfer')
                .send({
                    from: "Cintia Lima",
                    to: "Ana Maria",
                    amount: 6000
                });

            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Sender or recipient not found')
           
            // Reseto o Mock
            sinon.restore();
        });

        it ('Usando Mocks: Quando informo valores vpalidos eu tenho sucesso com 201 CREATED ', async () => {
            // Mocar apenas a função transfer do Service
            const transferServiceMock = sinon.stub(transferService, 'transferValue');
            transferServiceMock.returns({
               from: "Cintia Lima",
               to: "Ana Maria",
               amount: 6000,
               date: new Date().toISOString()
            });

            const resposta = await request (app)
                .post('/transfer')
                .send({
                    from: "Cintia Lima",
                    to: "Ana Maria",
                    amount: 6000
                });

            expect(resposta.status).to.equal(201);
            expect(resposta.body).to.have.property('from', 'Cintia Lima');
            expect(resposta.body).to.have.property('to', 'Ana Maria');
            expect(resposta.body).to.have.property('amount',6000);

            // Reseto o Mock
            sinon.restore();
        }); 

    });       

    describe('GET /transfers', () => {
        // Its ficam aqui
    });
    // Close the outer describe block
  });
