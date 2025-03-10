import calendarIcon from "../assets/images/CalendarIcon.png";
import localisation_icon from "../assets/images/broche-de-localisation 1.png";
import downArrow from "../assets/images/caret.png";
import { sportsOptions, terrainsOptions, moroccanCities } from "./options.ts";
import searchIcon from "../assets/images/recherche 1.png";
import { Select, SelectItem, Avatar, DatePicker } from "@heroui/react";
import { getLocalTimeZone, now } from "@internationalized/date";
import { Link } from "react-router";

const FilterSearch = () => {
  return (
    <div className="w-11/12 md:w-11/12 relative z-50 h-auto py-7 px-5 bg-white mx-auto -translate-y-1/4 md:-translate-y-1/2 rounded-xl text-gray-600 font-DmFont">
      <div className="grid  relative z-50 gap-x-3 gap-y-2 lg:grid-cols-12 grid-cols-2 grid-rows-4 lg:grid-rows-1   md:w-11/12 mx-auto h-full ">
        {/* Sport Type */}
        <div className="row-start-1 row-end-1 col-start-1 col-end-2 lg:col-end-3 flex flex-col mx-0">
          <h3 className="   text-sm mb-4 font-medium">Difficulté</h3>

          <Select
            items={sportsOptions}
            defaultSelectedKeys={["1"]}
            placeholder="Difficulté"
            labelPlacement="outside"
            variant="bordered"
            selectorIcon={
              <img src={downArrow} style={{ width: "22px", height: "22px" }} />
            }
            classNames={{
              base: "",
              trigger: "h-12",
              listboxWrapper: "bg-gray-50 rounded-lg",
              popoverContent: "bg-gray-50 mt-2",
            }}
            renderValue={(items) => {
              return items.map((item) => (
                <div key={item.id} className="flex items-center gap-2">
                  <Avatar
                    alt={item.data.label}
                    className="flex-shrink-0"
                    size="sm"
                    style={{
                      backgroundColor: "transparent",
                      width: 20,
                      height: 20,
                    }}
                    src={item.data.icon}
                  />
                  <div className="flex flex-col">
                    <span>{item.data.label}</span>
                  </div>
                </div>
              ));
            }}
          >
            {(sprt) => (
              <SelectItem
                key={sprt.id}
                textValue={sprt.label}
                style={{
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  marginBottom: "5px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                <div className="flex gap-2 items-center">
                  <Avatar
                    alt={sprt.label}
                    className="flex-shrink-0"
                    size="sm"
                    style={{
                      backgroundColor: "transparent",
                      width: 20,
                      height: 20,
                    }}
                    src={sprt.icon}
                  />
                  <div className="flex flex-col">
                    <span className="text-small">{sprt.label}</span>
                  </div>
                </div>
              </SelectItem>
            )}
          </Select>
        </div>
        {/* Titre */}
        <div className="row-start-1 row-end-1  col-start-2 col-end-3 lg:col-start-3 lg:col-end-6 flex flex-col mx-0">
          <h3 className="    text-sm mb-4 font-medium">Titre du Jeu</h3>

          <Select
            items={moroccanCities}
            defaultSelectedKeys={["1"]}
            placeholder="Titre du Jeu"
            labelPlacement="outside"
            variant="bordered"
            selectorIcon={
              <img src={downArrow} style={{ width: "22px", height: "22px" }} />
            }
            classNames={{
              base: "",
              trigger: "h-12",
              listboxWrapper: "bg-gray-50 rounded-lg",

              popoverContent: "bg-gray-50 mt-2",
            }}
            renderValue={(items) => {
              return items.map((item) => (
                <div key={item.id} className="flex items-center gap-2">
                  <Avatar
                    alt="localisation icon"
                    className="flex-shrink-0"
                    size="sm"
                    style={{
                      backgroundColor: "transparent",
                      width: 20,
                      height: 20,
                    }}
                    src={localisation_icon}
                  />
                  <div className="flex flex-col">
                    <span>{item.data.value}</span>
                  </div>
                </div>
              ));
            }}
          >
            {(sprt) => (
              <SelectItem
                key={sprt.id}
                textValue={sprt.value}
                style={{
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  marginBottom: "5px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                <div className="flex gap-2 items-center">
                  <div className="flex flex-col">
                    <span className="text-small">{sprt.value}</span>
                  </div>
                </div>
              </SelectItem>
            )}
          </Select>
        </div>
        {/*Date and time picker*/}
        <div className="row-start-2 row-end-2 lg:row-start-1 lg:row-end-1 col-start-1 col-end-3 lg:col-start-6 lg:col-end-9 flex flex-col mx-0">
          <h3 className="    text-sm mb-4 font-medium">
            Date et l&apos;Heure{" "}
          </h3>
          <div className="w-full flex flex-row gap-4 text-sm font-extrabold">
            <DatePicker
              variant="bordered"
              hideTimeZone
              size="lg"
              showMonthAndYearPickers
              base="text-bold font-extrabold"
              calendar="bg-red-300"
              selectorIcon={
                <img
                  src={calendarIcon}
                  className="hidden invisible"
                  style={{ width: "18px", height: "18px" }}
                />
              }
              classNames={{
                base: "h-12 text-sm text-red-600 !font-extrabold ",

                selectorIcon: "xl:block block md:hidden",
                // selectorButton: "bg-red-700",
              }}
              defaultValue={now(getLocalTimeZone())}
            />
          </div>
        </div>
        {/*Type de terrain*/}
        <div className="row-start-3 row-end-3 lg:row-start-1 lg:row-end-1 col-start-1 col-end-4 lg:col-start-9 lg:col-end-11 flex flex-col mx-0">
          <h3 className="    text-sm mb-4 font-medium">
            Titre de la Compétition{" "}
          </h3>

          <Select
            items={terrainsOptions}
            defaultSelectedKeys={["1"]}
            placeholder="Type de Terrain"
            labelPlacement="outside"
            variant="bordered"
            selectorIcon={
              <img src={downArrow} style={{ width: "22px", height: "22px" }} />
            }
            classNames={{
              base: "",
              trigger: "h-12",
              listboxWrapper: "bg-gray-50 rounded-lg",
              popoverContent: "bg-gray-50 mt-2",
            }}
            renderValue={(items) => {
              return items.map((item) => (
                <div key={item.id} className="flex items-center gap-2">
                  <img
                    src={item.data.icon}
                    width={22}
                    height={22}
                    className="flex-shrink-0"
                  />
                  <div className="flex flex-col">
                    <span>{item.data.label}</span>
                  </div>
                </div>
              ));
            }}
          >
            {(sprt) => (
              <SelectItem
                key={sprt.id}
                textValue={sprt.label}
                style={{
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  marginBottom: "5px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                <div className="flex gap-2 items-center">
                  <img
                    src={sprt.icon}
                    width={22}
                    height={22}
                    className="flex-shrink-0"
                  />
                  <div className="flex flex-col">
                    <span className="text-small">{sprt.label}</span>
                  </div>
                </div>
              </SelectItem>
            )}
          </Select>
        </div>
        {/* Search Button */}
        <div className="row-start-4 row-end-4 lg:row-start-1 lg:row-end-1 col-start-1 col-end-3 lg:col-start-11 lg:col-end-13 flex flex-col mx-0 self-end ">
          <button>
            <Link to="/searchpage">
              <div className="bg-green-900 flex items-center  justify-center max-w-full gap-2 h-12 rounded-xl">
                <img src={searchIcon} alt="" width={20} height={20} />

                <div className=" text-white"> Rechercher</div>
              </div>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;
