import { useNavigate } from "react-router-dom";
import TicketType from "./TicketType";
import toast, { Toaster } from "react-hot-toast";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
export default function Card({ option, setOption, selectedType, setSelectedType }) {
  const navigate = useNavigate();

  const handleNext = () => {
    let hasError = false;
    if (!selectedType) {
      toast.error("Please select a ticket type before proceeding.");
      hasError = true;
    }
    if (!option || option === "") {
      toast.error("Please select the number of tickets before proceeding.");
      hasError = true;
    }
    if (!hasError) navigate("/step-2");
  };

  return (
    <div className="max-w-[700px] mx-auto bg-cardColor rounded-[40px] px-12 py-12 mt-[46px]">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex justify-between items-center">
        <p className="font-jeju text-[32px] text-white">Ticket Selection</p>
        <p className="font-roboto text-base leading-[150%] text-grey">Step 1/3</p>
      </div>
      <hr className="border border-deepgreen mt-3" />
      <div className="bg-secondary px-6 py-6 rounded-[32px] space-y-8 mt-8">
        <div className="bg-[radial-gradient(circle,#0A0C11, #07373F)] space-y-2 px-6 py-6 border border-deepgreen rounded-3xl">
          <h1 className="font-rage text-[62px] leading-[100%] text-grey text-center">Techember Fest &quot;25</h1>
          <p className="font-roboto text-base leading-[150%] text-grey w-[61%] mx-auto text-center">Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
          <p className="font-roboto text-base leading-[150%] text-grey text-center">📍 [Event Location] || March 15, 2025 | 7:00PM</p>
        </div>
        <hr className="border border-deepgreen" />
        <div>
          <p className="text-base text-grey leading-[150%] font-roboto">Select Ticket Type:</p>
          <div className="p-4 border border-deepgreen rounded-3xl flex justify-between mt-2">
            <TicketType price="Free" type="REGULAR ACCESS" date="20/52" selectedType={selectedType} setSelectedType={setSelectedType} />
            <TicketType price="$150" type="VIP ACCESS" date="20/52" selectedType={selectedType} setSelectedType={setSelectedType} />
            <TicketType price="$150" type="VVIP ACCESS" date="20/52" selectedType={selectedType} setSelectedType={setSelectedType} />
          </div>
        </div>
        <div>
          <form>
            <label className="block text-base text-grey leading-[150%] font-roboto">Number of Tickets</label>
            <select className="w-full mt-2 p-3  bg-deepergreen border border-deepgreen text-white rounded-xl outline-none" value={option} onChange={(e) => setOption(e.target.value)}>
              <option value="">Select a ticket</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </form>
        </div>
        <div className="flex justify-between">
          <Button className="w-[47%] text-button border border-deepgreen rounded-xl">Cancel</Button>
          <Button className="w-[47%] text-white bg-button rounded-xl" onClick={handleNext}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
