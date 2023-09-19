export default function calculateCurrentNumber (halfPortions: boolean, checked: number, number: number): number {
    let current;
    if(halfPortions) {
        if(checked > 2 * number) {
            current = (checked / 2);
            current = Math.ceil(current);
        } else {
            current = number;
        }
    } else {
        if(checked > number) {
            current = checked;
        } else {
            current = number;
        }
    }
    return current;
};