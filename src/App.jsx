
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useTaxes } from "./hooks/useTaxes";
import { useCountries } from "./hooks/useCountries";
import Table from "./components/Table";
import EditModal from "./components/EditModal";
import Loader from "./components/Loader";

function App() {
  const { taxes, loading, error, saveTax } = useTaxes();
  const countries = useCountries();
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (row) => {
    console.log("ROW CLICKED:", row);
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const handleSave = async (updatedData) => {
    if (!selectedRow) return;

    try {
      await saveTax(selectedRow.id, updatedData);
      toast.success("Tax updated successfully");
      setIsModalOpen(false);
      setSelectedRow(null);
    } catch (error) {
      toast.error("Failed to update tax");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRow(null);
  };

  if (loading) return <Loader />;

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-red-600">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-12 pb-20 font-inter">
      <div className="flex justify-center w-full">
        <Table data={taxes} onEdit={handleEdit} />
      </div>
  
      <EditModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        row={selectedRow}
        countries={countries}
        onSave={handleSave}
      />
    </div>
  );
}

export default App;
