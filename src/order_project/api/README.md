# TODO
[ ] Criar cadastro do restaurante gerendo um código

[ ] Vincular os produtos com o restaurante

[ ] Cadastro dos produtos

# 💻 Como utilizar

Lembre-se que para utilizar a API localmente o Docker e o container do Mongo precisam estar rodando. Caso não saiba como fazer isso, leia a próxima sessão.

Para utilizar a api basta inserir no terminal o seguinte código:

Local:
```sh
npm run dev
```

Build:
```sh
npm run build --> Para atualizar/criar o build
```

Versão final:
```sh
npm run dev --> Para utilizar o build final
```

# 📦 Docker

Abra um terminal e rode o comando:

```sh
docker run --name mongo -p 27017:27017 -d mongo
```

---
