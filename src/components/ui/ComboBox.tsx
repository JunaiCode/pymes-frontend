interface ComboBoxProps {
    label: string;
    options: { label: string; value: string }[];
    selected: string;
    setSelected: (value: string) => void;
}

export default function ComboBox({ label, options, selected, setSelected }: ComboBoxProps) {
    return (
        <div className="flex ml-2">
            
            <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}