# 📌 Guia de Uso do Git e GitHub no Projeto

Este guia vai te ajudar a entender como usar Git e GitHub para contribuir com o projeto de forma organizada. 🚀

---

## 📂 Estrutura do Repositório
- **`main`** → Branch principal com código estável.
- **`feature/nome-da-feature`** → Para adicionar novas funcionalidades.

---

## 🛠 Como Contribuir

### 1️⃣ Criando uma Nova Feature
1. **Atualize sua base**:
   ```
   git checkout main
   git pull origin main
   ```
2. **Crie uma branch para sua funcionalidade**:
   ```
   git checkout -b feature/nome-da-feature
   ```
3. **Implemente a funcionalidade e faça commits pequenos e descritivos**:
   ```
   git add .
   git commit -m "[Feature] Adiciona nova funcionalidade X"
   ```
4. **Envie sua branch para o GitHub**:
   ```
   git push origin feature/nome-da-feature
   ```

---

### 2️⃣ Criando um Pull Request (PR)
1. No GitHub, vá até o repositório e clique em **Pull Requests**.
2. Clique em **New Pull Request** e selecione sua branch `feature/nome-da-feature`.
3. Descreva as mudanças e envie o PR para revisão.
4. Aguarde feedbacks e faça ajustes, se necessário.
5. Após aprovação, o PR será mesclado na `main`.

---


## 📝 Boas Práticas
✅ Sempre atualize sua base (`git pull origin main`) antes de criar uma nova branch.
✅ Use nomes descritivos para as branches (`feature/login`).
✅ Faça commits pequenos e explicativos.
✅ Sempre peça revisão de código antes do merge.

---

# Para iniciar o arquivo
No terminal:
```
cd front-end
```
```
npm install
```
```
npm run dev
```

Se tiver dúvidas, fique à vontade pra perguntar no grupo!

