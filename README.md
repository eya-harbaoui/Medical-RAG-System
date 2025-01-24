# 📚 Medical RAG(Retrieval-Augmented Generation) system 

This project is a scalable and interactive application built with **Next.js**, **Pinecone**, **Transformer.js**, **LangChain**, and **TypeScript**. It dynamically updates a Pinecone vector database using medical documents, providing an intuitive interface for document management and embedding operations.

---

## 🚀 Features

- 📄 **Document Management**: View a list of uploaded documents.
- 📂 **File Upload**: Add new files to your path for processing.
- 🔄 **Dynamic Preprocessing**: Preprocess documents by:
  - Chunking the content.
  - Converting chunks into word embeddings using **mxbai-embed-large-v1** from Hugging Face.
  - Storing embeddings in the **Pinecone vector database**.
---

## 🛠️ Technologies Used

- **Next.js**: Frontend framework for building the interface.
- **TailwindCSS**
- **Pinecone**: Vector database for managing embeddings.
- **Transformer.js**: For handling word embeddings.
- **LangChain**: Facilitating natural language processing workflows.
- **TypeScript**: Ensuring type safety and robust code.

---

## ⚙️ Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/eya-harbaoui/Medical-RAG-System.git
   cd rag-next-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file and add your credentials:
   ```env
   PINECONE_API_KEY=your_pinecone_api_key
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 🧩 Application interface

1. **Add Documents**: Add documents to documents folder.
2. **Preprocess Documents**: Automatically chunk the content and convert chunks into embeddings using **mxbai-embed-large-v1**.
3. **Store Embeddings**: Save the processed embeddings into the **Pinecone vector database** for efficient retrieval.
