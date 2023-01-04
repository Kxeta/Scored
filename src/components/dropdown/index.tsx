import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export type LIST_ITEM = {
    id: number,
    label: string,
    img: string | null
}

const propTypes = {
    placeholder: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    clear: PropTypes.bool,
    disabled: PropTypes.bool,
    onSelect: PropTypes.func,
}

/**
 * FC that renders a dropdown based on a list passed as a prop.
 * It also has the option of a prop for a call back whenever the value changes
 * 
 * @param props 
 * @returns Dropdown component
 */

function Dropdown(props: PropTypes.InferProps<typeof propTypes>) {
    const [value, setValue] = useState<LIST_ITEM>()
    const [isOpen, setIsOpen] = useState(false)
    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if(props.clear) setValue(undefined)
    }, [props.clear])
    
    
    const handleSelect = (id: number) => {
        const selected: LIST_ITEM = props.list?.find((element: LIST_ITEM) => element.id === id)
        if (selected) {
            setValue(selected)
            if (props.onSelect) props.onSelect(id)
        }
        setIsOpen(false)
    }

    const handleClickOutside = (event: Event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
            setIsOpen(false)
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }

    const renderItem = (item: LIST_ITEM) => {
        return <div className='dropdown-item'>
            {item.img && <img src={item.img} alt={item.label}/>}
            <p>{item.label}</p>
        </div>
    }

    const renderOption = (item: LIST_ITEM) => {
        return <div key={item.id} className='dropdown-option' onClick={() => handleSelect(item.id)}>
            {renderItem(item)}
        </div>
    }

    const toggleOptions = () => {
        if (props.disabled) return
        // Add a document event listener when we are about to open the options, so we can close the dropdown
        // when we click outside of it
        if (!isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        setIsOpen(!isOpen);
    }
    
    const wrapperClassName = `${props.disabled ? 'disabled ' : ''}dropdown-wrapper`

    return (
        <div ref={wrapperRef} className={wrapperClassName} onClick={toggleOptions} data-testid="dropdown">
            <div className='dropdown-content'>
                <div className='dropdown-value'>
                    {value?.id ? renderItem(value) : props.placeholder}
                </div>
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </div>
            
            {isOpen && 
                <div className='dropdown-options'>
                    {props.list?.map(renderOption)}
                </div>
            }
        </div>
    )
}

Dropdown.prototypes = propTypes

export default Dropdown
