import { handleLastMealMinusClick, handleLastMealPlusClick, handleMealsNumberMinusClick, handleMealsNumberPlusClick, handleFirstMealMinusClick, handleFirstMealPlusClick }  from '@/app/settings/component/section/progress-utils';

describe('dispatch meals', function () {

    const dispatch = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });
    
    it('should reduce first meal when firstMeal >= 1', () => {
        //init
        const firstMeal = 1;

        //invoke
        handleFirstMealMinusClick(firstMeal, dispatch);
        
        //check
        expect(dispatch).toBeCalledWith({
            type: 'reduce',
            group: 'firstMeal',
        });
    })

    it('should not reduce first meal when firstMeal < 1', () => {
        //init
        const firstMeal = 0;

        //invoke
        handleFirstMealMinusClick(firstMeal, dispatch);
        
        //check
        expect(dispatch).not.toBeCalled();
    })

    it('should add first meal when firstMeal < 23 and lastMeal - firstMeal > 1', () => {
        //init
        const firstMeal = 3;
        const lastMeal = 5;

        //invoke
        handleFirstMealPlusClick(firstMeal, lastMeal, dispatch);
        
        //check
        expect(dispatch).toBeCalledWith({
            type: 'add',
            group: 'firstMeal',
          });
    })

    it('should not add first meal when firstMeal >= 23 || lastMeal - firstMeal <= 1', () => {
        //init
        const firstMeal = 23;
        const lastMeal = 5;

        //invoke
        handleFirstMealPlusClick(firstMeal, lastMeal, dispatch);
        
        //check
        expect(dispatch).not.toBeCalled();
    })

    it('should reduce last meal when lastMeal - firstMeal > 1', () => {
        //init
        const lastMeal = 5;
        const firstMeal = 3;

        //invoke
        handleLastMealMinusClick(firstMeal, lastMeal, dispatch);
        
        //check
        expect(dispatch).toBeCalledWith({
            type: 'reduce',
            group: 'lastMeal',
        });
    })

    it('should not reduce last meal when lastMeal - firstMeal <= 1', () => {
        //init
        const firstMeal = 5;
        const lastMeal = 6;

        //invoke
        handleLastMealMinusClick(firstMeal, lastMeal, dispatch);
        
        //check
        expect(dispatch).not.toBeCalled();
    })

    it('should add last meal when lastMeal < 23' , () => {
        //init
        const lastMeal = 5;

        //invoke
        handleLastMealPlusClick(lastMeal, dispatch);
        
        //check
        expect(dispatch).toBeCalledWith({
            type: 'add',
            group: 'lastMeal',
          });
    })

    it('should not add last meal when lastMeal >= 23 ', () => {
        //init
        const lastMeal = 24;

        //invoke
        handleLastMealPlusClick(lastMeal, dispatch);
        
        //check
        expect(dispatch).not.toBeCalled();
    })

    it('should not reduce meals number when mealsNumber <= 2 ', () => {
        //init
        const mealsNumber = 2;

        //invoke
        handleMealsNumberMinusClick(mealsNumber, dispatch);
        
        //check
        expect(dispatch).not.toBeCalled();
    })

    it('should reduce meals number when mealsNumber > 2 ', () => {
        //init
        const mealsNumber = 4;

        //invoke
        handleMealsNumberMinusClick(mealsNumber, dispatch);
        
        //check
        expect(dispatch).toBeCalledWith({
            type: 'reduce',
            group: 'mealsNumber',
        });
    })

    it('should add meals number', () => {
        //init

        //invoke
        handleMealsNumberPlusClick(dispatch);
        
        //check
        expect(dispatch).toBeCalledWith({
            type: 'add',
            group: 'mealsNumber',
        });
    })
})




