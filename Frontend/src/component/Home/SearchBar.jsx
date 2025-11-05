import React, { useState } from "react";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";
import engineee from "../../assets/engine.jpeg";
import NS from '../../assets/NS.png';
import trust from '../../assets/trust.png';
import Warranty from "../../assets/warranty.png";
export default function VehicleSearch() {
  const navigate = useNavigate();

  const years = Array.from({ length: 2025 - 1980 + 1 }, (_, i) => 2025 - i);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedPart, setSelectedPart] = useState("");
  const [models, setModels] = useState([]);

  const makesAndModels = {
    acura: ["CL", "CSX", "EL", "ILX", "Integra", "Legend", "MDX", "NSX", "RDX", "RL", "RLX", "RSX", "SLX", "TL", "TLX", "TSX", "Vigor", "ZDX"],
    audi: ["100", "200", "A3", "A4", "A5", "A6", "A7", "A8", "E-tron", "Q3", "Q5", "Q7", "Q8", "R8", "RS3", "RS4", "RS5", "RS6", "RS7", "S3", "S4", "S5", "S6", "S7", "S8", "TT"],
    bmw: ["128i", "135i", "1M", "228i", "230i", "320i", "323i", "325i", "328i", "330i", "335i", "340i", "428i", "430i", "435i", "440i", "525i", "528i", "530i", "535i", "540i", "545i", "550i", "M2", "M3", "M4", "M5", "M6", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "Z3", "Z4"],
     buick: ["Enclave", "Encore", "Envision", "LaCrosse", "Regal", "Verano"],
    cadillac: ["ATS", "CT4", "CT5", "CT6", "CTS", "DTS", "Escalade", "SRX", "XT4", "XT5", "XT6", "XTS"],
    chevrolet: ["Blazer", "Camaro", "Cobalt", "Colorado", "Corvette", "Cruze", "Equinox", "Impala", "Malibu", "Silverado", "Suburban", "Tahoe", "TrailBlazer", "Traverse"],
    chrysler: ["200", "300", "PT-Cruiser", "Pacifica", "Sebring", "Town-Country"],
    dodge: ["Avenger", "Caliber", "Caravan", "Challenger", "Charger", "Dakota", "Durango", "Grand-Caravan", "Journey", "Magnum", "Neon", "Ram", "Viper"],
    ford: ["Bronco", "Edge", "Escape", "Expedition", "Explorer", "F-150", "F-250", "F-350", "Fiesta", "Focus", "Fusion", "Mustang", "Ranger", "Taurus"],
    gmc: ["Acadia", "Canyon", "Envoy", "Safari", "Savana", "Sierra", "Terrain", "Yukon"],
    honda: ["Accord", "CR-V", "Civic", "Element", "Fit", "HR-V", "Odyssey", "Passport", "Pilot", "Ridgeline"],
    hyundai: ["Accent", "Elantra", "Equus", "Genesis", "Ioniq", "Kona", "Palisade", "Santa-Fe", "Sonata", "Tucson", "Veloster"],
    infiniti: ["FX35", "FX45", "G35", "G37", "M35", "M45", "Q45", "Q50", "Q60", "QX4", "QX56", "QX60", "QX80"],
    jaguar: ["F-PACE", "F-TYPE", "S-TYPE", "X-TYPE", "XE", "XF", "XJ", "XK"],
    jeep: ["Cherokee", "Commander", "Compass", "Grand-Cherokee", "Liberty", "Patriot", "Renegade", "Wrangler"],
    kia: ["Forte", "Optima", "Rio", "Sedona", "Sorento", "Soul", "Sportage", "Telluride"],
    lexus: ["ES", "GS", "GX", "IS", "LS", "LX", "NX", "RC", "RX", "SC"],
    lincoln: ["Aviator", "Continental", "MKC", "MKS", "MKT", "MKX", "MKZ", "Navigator"],
    mazda: ["2", "3", "5", "6", "CX-3", "CX-5", "CX-9", "MX-5-Miata", "RX-7", "RX-8"],
    "mercedes-benz": ["A-Class", "C-Class", "E-Class", "G-Class", "GLA", "GLC", "GLE", "GLS", "S-Class", "SL-Class"],
    mitsubishi: ["Eclipse", "Galant", "Lancer", "Mirage", "Montero", "Outlander", "Raider"],
    nissan: ["Altima", "Armada", "Frontier", "GT-R", "Juke", "Leaf", "Maxima", "Murano", "Pathfinder", "Quest", "Rogue", "Sentra", "Titan", "Versa", "Xterra"],
    ram: ["1500", "2500", "3500", "4500", "5500", "ProMaster"],
    subaru: ["Ascent", "BRZ", "Crosstrek", "Forester", "Impreza", "Legacy", "Outback", "WRX", "XV"],
    tesla: ["Model-3", "Model-S", "Model-X", "Model-Y"],
    toyota: ["4Runner", "Avalon", "Camry", "Corolla", "Highlander", "Land-Cruiser", "Prius", "RAV4", "Sequoia", "Sienna", "Tacoma", "Tundra"],
    volkswagen: ["Atlas", "Beetle", "GTI", "Golf", "Jetta", "Passat", "Tiguan", "Touareg"],
    volvo: ["S60", "S90", "V60", "V90", "XC40", "XC60", "XC90"],
  };

  const carParts = [
    "Abs Brake Pump", "Ac Blower Motor", "Ac Compressor", "Ac Condenser", "Ac Condenser Fan", "Ac Control Panel", "Ac Evaporator", "Ac Evaporator Housing",
    "Ac Hoses", "Ac Receiver", "Ac Selector", "Ac Wire Harness", "Accelerator Parts", "Accessory Holders", "Air Bag", "Air Cleaner", "Air Flow Meter",
    "Air Injection Pump", "Air Shutter", "Air Tube Resonator", "Alternator", "Amplifier", "Antenna", "Ash Tray", "Automatic Transmission", "Axle Actuator",
    "Axle Assembly Front", "Axle Assembly Rear", "Axle Flange", "Axle Housing", "Axle Shaft", "Back Glass", "Back Glass Regulator", "Backing Plate Front",
    "Backing Plate Rear", "Backup Camera", "Backup Lamp", "Battery", "Battery Tray", "Bed Liner", "Bell Housing", "Belt Tensioner", "Blower Motor",
    "Body Sensor", "Body Wire Harness", "Brake Caliper", "Brake Master Cylinder", "Brake Proportioning Valve", "Brake Rotor Front", "Brake Rotor Rear",
    "Brake Shoes", "Bumper Assembly Rear", "Bumper Cover Front", "Bumper Cover Rear", "Bumper End Cap", "Bumper Filler Panel", "Bumper Front",
    "Bumper Guard Front", "Bumper Guard Rear", "Bumper Reinforcement Front", "Bumper Reinforcement Rear", "Bumper Shock", "Cab Clip", "Camshaft",
    "Camshaft Housing", "Carburetor", "Cargo Cover", "Carpet Front", "Carpet Rear", "Carrier", "Carrier Case", "Catalytic Converter", "Center Cap",
    "Center Pillar", "Chassis Mounts", "Chassis Sensor", "Circuit Boards", "Clock", "Clock Spring", "Clutch Disc", "Clutch Master Cylinder",
    "Clutch Slave Cylinder", "Coil Ignitor", "Coil Spring", "Column Switch", "Computer", "Condenser Fan Motor", "Connecting Rod", "Console Front",
    "Console Rear", "Convertible Boot", "Convertible Top Lift", "Convertible Top Motor", "Coolant Pump", "Coolant Reservoir", "Cowl", "Cowl Vent Panel",
    "Crankshaft", "Cruise Control", "Cylinder Block", "Cylinder Head", "Dash Assembly", "Dash Bezel", "Dash Pad", "Dash Panel", "Dash Wire Harness",
    "Decklid Tailgate", "Differential Assembly", "Differential Flange", "Differential Housing", "Differential Side Gears", "Distributor", "Door Front Driver",
    "Door Front Passenger", "Door Glass Front Driver", "Door Glass Front Passenger", "Door Glass Rear Driver", "Door Glass Rear Passenger",
    "Door Handle Exterior", "Door Handle Front Driver", "Door Handle Front Passenger", "Door Handle Rear Driver", "Door Handle Rear Passenger",
    "Door Hinge Front", "Door Hinge Rear", "Door Molding Front", "Door Molding Rear", "Door Rear Driver", "Door Vent Glass Front Driver",
    "Door Vent Glass Front Passenger", "Door Vent Glass Rear Driver", "Door Vent Glass Rear Passenger", "Door Window Crank Front", "Door Window Crank Rear",
    "Drag Link", "Drive Shaft Front", "Drive Shaft Rear", "Drivetrain Sensor", "Ecm", "Ecu", "Egr Valve", "Electric Door Motor", "Electric Door Switch",
    "Electronic Control Module", "Emergency Brake Parts", "Engine Assembly", "Engine Computer", "Engine Cover", "Engine Mounts", "Engine Oil Cooler",
    "Engine Pulley", "Engine Wire Harness", "Evaporator Core", "Exhaust Assembly", "Exhaust Cross Pipe", "Exhaust Fluid Pump"
  ];

 
  const handleMakeChange = (e) => {
    const make = e.target.value;
    setSelectedMake(make);
    setModels(makesAndModels[make] || []);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedYear || !selectedMake || !selectedModel || !selectedPart) {
      alert("Please fill all fields");
      return;
    }
    navigate("/order", {
      state: { selectedYear, selectedMake, selectedModel, selectedPart },
    });
  };
  return (
  <section
    className="vehicle-section"
    style={{
      backgroundImage: `url(${engineee})`,
    }}
  >
    <div className="overlay"></div>
    
    <div className="vehicle-container">
       <div className="vehicle-icons">
        <div className="icon-item">
          <img src={Warranty} alt="Warranty" />
          
          
        </div>
        <div className="icon-item">
          <img src={trust} alt="Trust" />
         
        </div>
        <div className="icon-item">
          <img src={NS} alt="Warranty" />
          
        </div>
      </div>
      <h1 className="vehicle-title">Find Parts For Your Vehicle</h1>
      <p className="vehicle-subtitle">
        Choose your car details to find the right parts instantly
      </p>

      {/* === IMAGE ROW BEFORE SEARCH BOX === */}
     

      {/* === SEARCH BOX === */}
      <form className="vehicle-form" onSubmit={handleSubmit}>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="vehicle-select"
        >
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year}>{year}</option>
          ))}
        </select>

        <select
          value={selectedMake}
          onChange={handleMakeChange}
          className="vehicle-select"
        >
          <option value="">Select Make</option>
          {Object.keys(makesAndModels).map((make) => (
            <option key={make} value={make}>
              {make.charAt(0).toUpperCase() + make.slice(1)}
            </option>
          ))}
        </select>

        <select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="vehicle-select"
        >
          <option value="">Select Model</option>
          {models.map((model) => (
            <option key={model}>{model}</option>
          ))}
        </select>

        <select
          value={selectedPart}
          onChange={(e) => setSelectedPart(e.target.value)}
          className="vehicle-select"
        >
          <option value="">Select Part</option>
          {carParts.map((part) => (
            <option key={part}>{part}</option>
          ))}
        </select>

        <button className="vehicle-button">Search</button>
      </form>
    </div>
  </section>
);
}
