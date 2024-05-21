interface ComboBoxProps {
    label: string;
    optionsLabels: string[];
    optionsValues: string[];
    selected: string;
    setSelected: (value: string) => void;
    enabled?: boolean;
}

export default function ComboBox({ label, optionsLabels, optionsValues, selected, setSelected, enabled = true }: ComboBoxProps) {
    
    return (
        <div className="flex mr-2 flex-col w-1/5">
            <label className="text-gray-700 text-xs" htmlFor="comboBox">{label}</label>
            <select
                id="comboBox"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                disabled={!enabled}
            >
                {optionsLabels.map((option, index) => (
                    <option key={index} value={optionsValues[index]}>{option}</option>
                ))}	
            </select>
        </div>
    );
}