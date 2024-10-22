import { useState } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { FaLocationCrosshairs } from "react-icons/fa6";
import Container from "../ui/Container";

const countryData = [
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "GB", name: "United Kingdom" },
  { code: "AU", name: "Australia" },
  { code: "IN", name: "India" },
];

function First() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
    console.log("Selected Country Code:", event.target.value);
  };

  return (
    <div className="w-full h-full bg-gradient-to-r from-blue-50 to-yellow-50 ">
      <Container>
        <div className="mt-20 md:flex items-center">
          <div className="md:w-1/2 md:pl-24 pt-[40px] pl-10 md:pt-0">
            <div className="w-full">
              <div className="flex  items-center text-2xl w-64 p-1 bg-blue-900 mb-5 rounded-2xl">
                <div className="pl-3">
                  <AiOutlineThunderbolt />
                </div>
                <span className="text-white ml-2">Ek Click Deal Sahi</span>
              </div>
              <div className="w-5/6 mb-5">
                <span className="text-black text-5xl">1,55,500+</span>
                <span className="text-blue-800 text-5xl">
                  New And Used Machine for Sale
                </span>
              </div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="fname"
              >
                What You'd Like To Find
              </label>
              <div className="relative flex gap-4 w-fit ">
                <div className="relative flex flex-row">
                  <div className="w-fit">
                    <input
                      className="shadow appearance-none border rounded-sm  w-[120px] md:w-[250px] text-gray-700 leading-tight h-10 pl-10"
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Search By Name Manufacture"
                    ></input>
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <IoSearch />
                    </div>
                  </div>
                  <div className="w-1/3">
                    {/* <input
                      className="shadow appearance-none border rounded-sm text-gray-700 leading-tight h-10 pl-5 w-[100px]"
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Location"
                    ></input> */}
                    <select
                      id="country"
                      value={selectedCountry}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded-sm text-gray-700 leading-tight h-10 pl-10 w-[91px] md:w-fit"
                    >
                      <option value="" disabled placeholder="Location">
                        Select a country
                      </option>
                      {countryData.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.name} ({country.code})
                        </option>
                      ))}
                    </select>

                    <div className="absolute inset-y-0 left-200 flex items-center pointer-events-none">
                      <FaLocationCrosshairs className="size-[20px] ml-2  text-blue-600" />
                    </div>
                  </div>
                </div>

                <button className="bg-amber-400 hover:bg-amber-300 text-black border border-slate-900  font-bold py-2 px-8 rounded  overflow-hidden">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2  my-20 m-7 ">
            <iframe
              src="https://www.youtube.com/embed/vQzDIpAN9uE?si=q8b5OZpx2vZ9BVZG"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="w-full h-[500px] rounded-3xl md:flex md:items-center  "
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default First;
