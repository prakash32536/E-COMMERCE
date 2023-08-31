import React, { useEffect, useState } from 'react';
import {
  StyledParentBoxForFilterSection,
  StyledChild1BoxForFilterSection,
  StyledTypographyForFilterSection,
  StyledPriceAndRatingBoxForFilterSection
} from './Style';
import { useDispatch, useSelector } from 'react-redux';
import { geAllCategory } from '../actions/CategoryAction';
import SliderSizes from './PriceSlider';
import { StarRating } from './SetRating';
import './Style.css';

const FilterSection = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.GetAllCategory.CategoryList);
  const [categoryFilterById, setCategoryFilterById] = useState('');
  console.log('categoryFilterById', categoryFilterById);

  const handleCategoryFilter = (_id) => {
    setCategoryFilterById(_id);
  };

  useEffect(() => {
    dispatch(geAllCategory());
  }, []);

  useEffect(() => {
    dispatch(geAllCategory(categoryFilterById));
  }, [categoryFilterById]);
  return (
    <StyledParentBoxForFilterSection>
      <StyledChild1BoxForFilterSection className="scroll_Box">
        <StyledPriceAndRatingBoxForFilterSection>
          <StyledTypographyForFilterSection>Price</StyledTypographyForFilterSection>
          <SliderSizes />
        </StyledPriceAndRatingBoxForFilterSection>
        <StyledPriceAndRatingBoxForFilterSection>
          <StyledTypographyForFilterSection>Rating</StyledTypographyForFilterSection>
          <StarRating />
        </StyledPriceAndRatingBoxForFilterSection>
        {categoryList &&
          categoryList.map((item, index) => {
            return (
              <StyledTypographyForFilterSection
                key={index}
                onClick={() => handleCategoryFilter(item._id)}>
                {item.name}
              </StyledTypographyForFilterSection>
            );
          })}
      </StyledChild1BoxForFilterSection>
    </StyledParentBoxForFilterSection>
  );
};

export default FilterSection;
