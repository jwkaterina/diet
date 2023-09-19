export default interface CellProps {
    children: React.ReactNode;
    count: number,
    onPlusClick: () => void
    onMinusClick: () => void
}