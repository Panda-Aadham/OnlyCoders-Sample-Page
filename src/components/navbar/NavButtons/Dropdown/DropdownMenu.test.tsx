import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import DropdownMenu from './DropdownMenu.tsx';
import { featureItems, moreItems } from "./dropdownItems.tsx";

describe('test dropdown items appear', () => {
    const dropdowns = [featureItems, moreItems]
    //Test each dropdown
    dropdowns.forEach((item) => {
        test(`test ${item.label}`, () => {
            render(<DropdownMenu items={item} />);
            const dropdownButton = screen.getByText(item.label);
            expect(dropdownButton).toBeInTheDocument();
            fireEvent.mouseEnter(dropdownButton);
            //Test each dropdown subitem
            item.elements.forEach((element) => {
                expect(screen.queryByText(element.title)).toBeInTheDocument();
            })
        })
    })
})
