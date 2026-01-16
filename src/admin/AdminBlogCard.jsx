import React, { useState, useEffect } from "react";
import AdminNavbar from "./AdminNavbar";
import { 
  Download,
  Calendar,
  Pencil,
  Trash2,
  Mail
} from 'lucide-react';
import { BASE_URL } from "../config";
import DataTable from './Datatable';

const API_BASE_URL = `${BASE_URL}/api`;

const AdminBlogCard = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const res = await fetch(`${API_BASE_URL}/blog-cards`);
    const data = await res.json();
    setBlogs(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const fd = new FormData();
    fd.append("title", title);
    fd.append("description", description);
    if (image) fd.append("image", image);

    const url = editingId
      ? `${API_BASE_URL}/blog-cards/${editingId}`
      : `${API_BASE_URL}/blog-cards`;

    const method = editingId ? "PUT" : "POST";

    await fetch(url, { method, body: fd });

    setTitle("");
    setDescription("");
    setImage(null);
    setEditingId(null);

    fetchBlogs();
    setLoading(false);
  };

const handleDelete = async (id) => {
  const ok = window.confirm("Are you sure you want to delete this blog card?");
  if (!ok) return;

  await fetch(`${API_BASE_URL}/blog-cards/${id}`, { method: "DELETE" });
  fetchBlogs();
};

const columns = [
  {
    header: "Image",
    accessor: "image_url",
    render: (value, row) => (
  value ? (
    <div className="flex items-center">
      <img
        src={`${BASE_URL}${value}`}
        alt={row.title}
        className="rounded-lg object-cover"
        style={{ width: 140, height: 100 }}   // <<< FORCE SIZE
        onError={(e) => (e.target.style.display = "none")}
      />
    </div>
  ) : (
    <span className="text-gray-400 text-sm">No image</span>
  )
)
  },
  {
    header: "Title",
    accessor: "title"
  },
  {
    header: "Description",
    accessor: "description"
  },
  {
    header: "Actions",
    accessor: "id",
    render: (value, row) => (
      <div className="flex gap-2">
        <button
             className="text-blue-600 hover:text-blue-900 p-1"
           onClick={() => {
  setEditingId(row.id);
  setTitle(row.title);
  setDescription(row.description);
  window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to form
}}
            >
            <Pencil className="h-4 w-4" />
            </button>

        <button
           className="text-red-600 hover:text-red-900 p-1"
          onClick={() => handleDelete(row.id)}
        >
         <Trash2 className="h-4 w-4" />
        </button>
      </div>
    )
  }
];

  return (
    <>
      <AdminNavbar />

        <div className="container-max py-8 pt-20">
        <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Manage Blog Cards</h2>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow mb-8"
        >
          <h3 className="text-lg font-semibold mb-4">
            {editingId ? "Edit Blog Card" : "Add Blog Card"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Title</label>
              <input
                className="border rounded w-full p-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

           <div>
  <label className="block text-sm mb-1">Image</label>
  <input
    type="file"
    className="border rounded w-full p-2"
    onChange={(e) => setImage(e.target.files[0])}
  />
  {/* Show current image if editing */}
  {editingId && !image && blogs.find(b => b.id === editingId)?.image_url && (
    <img
      src={`${BASE_URL}${blogs.find(b => b.id === editingId).image_url}`}
      alt="Current"
      className="mt-2 w-40 h-24 object-cover rounded"
    />
  )}
</div>

            <div className="md:col-span-2">
              <label className="block text-sm mb-1">Description</label>
              <textarea
                className="border rounded w-full p-2"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
          >
            {loading ? "Saving..." : editingId ? "Update Blog" : "Add Blog"}

          </button>
        </form>

        {/* List */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b font-semibold">
            Blog Cards ({blogs.length})
          </div>

          {blogs.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No blog cards found
            </div>
          ) : (
           <DataTable
  columns={columns}
  data={blogs}
  pageSize={5}
  searchable={true}
/>

          )}
        </div>
      </div>
       </div>
    </>
  );
};

export default AdminBlogCard;
