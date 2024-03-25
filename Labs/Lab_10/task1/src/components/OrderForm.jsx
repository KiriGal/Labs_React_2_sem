import React, {useEffect, useState} from 'react';
import './OrderFormStyle.css';
import SliderImage from "./SliderImage";
import store from "../store";
import {Link} from "react-router-dom";

const OrderForm = () => {
    const [watches, setWatches] = useState([...store.getState().basket.list.watch]);
    const [isSelect, setIsSelect] = useState(false);
    const [orderStatus, setOrderStatus] = useState(false);
    const [deliveryMethod, setDeliveryMethod] = useState(store.getState().order.deliveryMethod);
    const [paymentMethod, setPaymentMethod] = useState(store.getState().order.paymentMethod);
    const [address, setAddress] = useState(store.getState().order.address);
    const [currentPage, setCurrentPage] = useState(store.getState().order.currentPage);
    const [allSelectedOrder, setAllSelectedOrder] = useState(false);

    useEffect(() => {
        setIsSelect(false);
        watches.map((watch) => {
            if(watch.selected)setIsSelect(true);
        })
    }, [watches]);

    useEffect(() => {
        store.dispatch({type: 'UPDATE_ORDER', deliveryMethod: deliveryMethod, paymentMethod: paymentMethod, address: address, currentPage: currentPage});
        if(deliveryMethod !== '' && paymentMethod !== '' && address !== '')setAllSelectedOrder(true); else setAllSelectedOrder(false);
    }, [deliveryMethod, paymentMethod, address, currentPage]);

    const handleCheckboxChange = (item, checked) => {
        setWatches(watches.map((watch) => {
            return watch.Name === item.Name ? {...watch, selected: checked} : watch
        }));
        store.getState({type: 'UPDATE_BASKET', items: watches});
    };

    const handleCountChange = (item, value) => {
        if(value < 0 || value > item.Quantity){
            value = item.Quantity;
        }
        setWatches(watches.map((watch) => {
            return watch.Name === item.Name ? {...watch, count: value} : watch
        }));
        store.getState({type: 'UPDATE_BASKET', items: watches});
    };

    const handleRemoveItem = (watch) => {
        store.dispatch({type: 'DELETE_ITEM_BASKET', item: {watch} });
        setWatches([...store.getState().basket.list.watch])
    };

    const handleOrder = () => {
        setOrderStatus(true);
    }


    const handleDeliveryMethodChange = (event) => {
        setDeliveryMethod(event.target.value);
    };

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const finishOrder = () => {
        store.dispatch({
            type: 'ADD_ORDER',
            items: watches.filter((item) => {
                return item.selected
            }),
            price: watches.filter((item) => {
                return item.selected
            }).reduce((sum, item) => {
                return sum + (item.Price * (100 - item.Discount) / 100 * item.count)
            }, 0)
        })
        console.log(store.getState().listOrders);
    }

    return (
        <div className="order">
            {!orderStatus ? (
                <div className="order-list">
                    {watches.map((item, index) => (
                        <div className="watch" key={index}>
                            <div className="watch-action">
                                <input
                                    type="checkbox"
                                    checked={item.selected}
                                    onChange={e => handleCheckboxChange(item, e.target.checked)}
                                />
                            </div>
                            <div className="watch-slider">
                                <SliderImage slides={item.Image}></SliderImage>
                            </div>
                            <div className="watch-description">
                                <p><h2>{item.Name}</h2></p>
                                <p style={{display: "flex"}}>
                                    <h4>{item.Price * (100 - item.Discount) / 100}</h4>
                                </p>
                            </div>
                            <div className="watch-action">
                                <input
                                    type="number"
                                    value={item.count}
                                    min={1}
                                    max={item.Quantity}
                                    onChange={e => handleCountChange(item, e.target.value)}
                                />
                                <button onClick={() => handleRemoveItem(item)}>Удалить</button>
                            </div>
                        </div>
                    ))}
                    {watches.length > 0 ?
                        <button className="orderButton" onClick={() => handleOrder()} disabled={!isSelect}>Заказать</button> : null}
                </div>
                )
                :
                (
                    <div className="order-form">
                        {currentPage === 1 && (
                            <>
                                <h2>Выберите способ доставки:</h2>
                                <label>
                        <input
                            type="radio"
                            value="courier"
                            checked={deliveryMethod === 'courier'}
                            onChange={handleDeliveryMethodChange}
                        />
                        Курьером
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="mail"
                            checked={deliveryMethod === 'mail'}
                            onChange={handleDeliveryMethodChange}
                        />
                        Почтой
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="pickup"
                            checked={deliveryMethod === 'pickup'}
                            onChange={handleDeliveryMethodChange}
                        />
                        Самовывоз
                            </label>
                        </>
                    )}

                    {currentPage === 2 && (
                        <>
                            <h2>Укажите адрес доставки:</h2>
                            <input
                                type="text"
                                value={address}
                                onChange={handleAddressChange}
                                disabled={deliveryMethod === 'pickup'}
                            />
                        </>
                    )}

                    {currentPage === 3 && (
                        <>
                            <h2>Выберите способ оплаты:</h2>
                            <label>
                                <input
                                    type="radio"
                                    value="cash"
                                    checked={paymentMethod === 'cash'}
                                    onChange={handlePaymentMethodChange}
                                />
                                Наличными
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="card"
                                    checked={paymentMethod === 'card'}
                                    onChange={handlePaymentMethodChange}
                                />
                                Банковской картой
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="bankTransfer"
                                    checked={paymentMethod === 'bankTransfer'}
                                    onChange={handlePaymentMethodChange}
                                />
                                Банковским переводом
                            </label>
                        </>
                    )}

                    <div className="navigation-buttons">
                        {currentPage > 1 && (
                            <button onClick={handlePreviousPage}>Предыдущая страница</button>
                        )}
                        {currentPage < 3 && (
                            <button onClick={handleNextPage}>Следующая страница</button>
                        )}
                        {currentPage === 3 && (
                            <button onClick={() => finishOrder()} disabled={!allSelectedOrder}><Link to="/catalog">Завершить заказ</Link></button>
                        )}
                    </div>
                </div>
            )}

        </div>
    );
};

export default OrderForm;
