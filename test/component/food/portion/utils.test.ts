import { handleFullPortionClick, handleHalfPortionClick} from '../../../../app/component/food/portion/utils';
import { Group } from '../../../../app/context/portions-reducer';

describe('render portion group', function () {
    
    it('should dispatch full porions when index is less or equal', () => {
        //init
        const index = 1;
        const checked = 2;
        const group = Group.CARBS;
        const dispatch = jest.fn();

        //invoke
        handleFullPortionClick(index, checked, group, dispatch);

        
        //check
        expect(dispatch).toBeCalledWith({
            type: 'check',
            group: group,
            checked: index - 1,
        });
    })

    it('should dispatch full portions when index is more', () => {
        //init
        const index = 3;
        const checked = 2;
        const group = Group.CARBS;
        const dispatch = jest.fn();

        //invoke
        handleFullPortionClick(index, checked, group, dispatch);

        
        //check
        expect(dispatch).toBeCalledWith({
            type: 'check',
            group: group,
            checked: index,
          });
    })

    it('should dispatch half porions when index <= checked / 2', () => {
        //init
        const index = 1;
        const checked = 2;
        const group = Group.CARBS;
        const dispatch = jest.fn();

        //invoke
        handleHalfPortionClick(index, checked, group, dispatch);

        
        //check
        expect(dispatch).toBeCalledWith({
            type: 'check',
            group: group,
            checked: 2 * (index - 1),
          });
    })

    it('should dispatch half portions when index == checked / 2 + 0.5', () => {
        //init
        const index = 1.5;
        const checked = 2;
        const group = Group.CARBS;
        const dispatch = jest.fn();

        //invoke
        handleHalfPortionClick(index, checked, group, dispatch);

        
        //check
        expect(dispatch).toBeCalledWith({
            type: 'check',
            group: group,
            checked: index * 2,
          });
    })

    it('should dispatch half portions when index >= checked / 2 + 1', () => {
        //init
        const index = 3;
        const checked = 4;
        const group = Group.CARBS;
        const dispatch = jest.fn();

        //invoke
        handleHalfPortionClick(index, checked, group, dispatch);

        
        //check
        expect(dispatch).toBeCalledWith({
            type: 'check',
            group: group,
            checked: index * 2 - 1,
          });
    })
})


