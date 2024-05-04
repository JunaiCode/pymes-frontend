interface ComboBoxProps {
    label: string;
    options: { name: string; modelId: string }[];
    selected: string;
    setSelected: (value: string) => void;
    enabled?: boolean;
}

export default function ComboBox({ label, options, selected, setSelected, enabled}: ComboBoxProps) {
    return (
        <div className="flex ml-2">
            
            <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                disabled={!enabled}
            >
                {options.map((option) => (
                    <option key={option.modelId} value={option.modelId}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
}