import AddPostList from "./pages/posts/AddPostList";
import AddPostForm from "./pages/posts/AddPostForm";

import EditPostForm from "./pages/posts/EditPostForm";
import SinglePostPage from "./pages/posts/SinglePostPage";
import Layout from "./layout/index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AddPostList />} />
        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;