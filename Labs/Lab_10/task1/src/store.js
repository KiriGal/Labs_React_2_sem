import { createStore } from 'redux';

const watches = [
    {
        Name: "Breitling Chronomat",
        Price: 37_900,
        Quantity: 3,
        Image: [
            "https://timecity.by/upload/images/0/846/179/d83/2962568/watch_breitling_chronomat_cb014012g713@1200x1200-3751400.webp",
            "https://timecity.by/upload/images/0/218/11b/32f/2962569/watch_breitling_chronomat_cb014012g713@1200x1200-3751410.webp",
            "https://timecity.by/upload/images/0/78f/316/6ea/2962570/watch_breitling_chronomat_cb014012g713@1200x1200-3751410.webp",
            "https://timecity.by/upload/images/0/82d/65a/a8e/2962572/watch_breitling_chronomat_cb014012g713@1200x1200-3751410.webp"
        ],
        Description: "Универсальные часы Breitling незаменимы для любого случая: они станут вашими надежными спутниками на красной дорожке и на пляже. Выпуск Chronomat в 1984 году совпал со столетним юбилеем Breitling и ознаменовал возвращение механических хронографов в семейство элитных часов Breitling. Спустя почти четыре десятилетия Chronomat остается воплощением решительности, позитива и стиля.",
        New: "Yes",
        Weight: 200,
        Discount: 30,
    },
    {
        Name: "Maurice Lacroix Aikon",
        Price: 7_500,
        Quantity: 3,
        Image: [
            "https://timecity.by/upload/images/0/d1c/9c5/3ce/2961988/watch_mauricelacroix_aikon_ai6008ss0013311@1200x1200-3751400.webp",
            "https://timecity.by/upload/images/0/757/ef1/3cf/2961989/watch_mauricelacroix_aikon_ai6008ss0013311@1200x1200-3751410.webp",
            "https://timecity.by/upload/images/0/247/437/829/2961990/watch_mauricelacroix_aikon_ai6008ss0013311@1200x1200-3751410.webp",
            "https://timecity.by/upload/images/0/931/eae/046/2961992/watch_mauricelacroix_aikon_ai6008ss0013311@1200x1200-3751410.webp"
        ],
        Description: "Современная эстетика в урбанистическом стиле, эргономичный дизайн и механическое сердце делают его идеальным спутником городской жизни. Благодаря игривому использованию контрастов и форм AIKON Automatic делает смелое заявление.",
        New: "Yes",
        Weight: 200,
        Discount: 20,
    },
    {
        Name: "Frederique Constant Classics",
        Price: 4_500,
        Quantity: 3,
        Image: [
            "https://timecity.by/upload/images/0/fe8/6d7/a87/2961931/watch_frederiqueconstant_classics_fc303bn5b6b@1200x1200-3751400.webp",
            "https://timecity.by/upload/images/0/d37/e0d/c8d/2961932/watch_frederiqueconstant_classics_fc303bn5b6b@1200x1200-3751410.webp",
            "https://timecity.by/upload/images/0/ea5/5d4/1e7/2961933/watch_frederiqueconstant_classics_fc303bn5b6b@1200x1200-3751410.webp",
            "https://timecity.by/upload/images/0/eed/762/a90/2961935/watch_frederiqueconstant_classics_fc303bn5b6b@1200x1200-3751410.webp"
        ],
        Description: "Часы Frederique Constant Classics Index Automatic FC-303BN5B6B – это классические и изысканные часы. Четкие линии и классический внешний вид являются отличительными чертами часов классической коллекции. Другие атрибуты включают в себя надежность и долговечность. Каждая модель в классической коллекции была разработана для самых требовательных стандартов. Компания Frederique Constant остается верной традиции доступности роскошных часов для любого человека.",
        New: "No",
        Weight: 200,
        Discount: 0,
    },
    {
        Name: "Franck Muller Long Island",
        Price: 86_200,
        Quantity: 3,
        Image: [
            "https://timecity.by/upload/images/0/d3f/76d/e56/2960741/watch_franckmuller_longisland_950qzd@1200x1200-3751400.webp",
            "https://timecity.by/upload/images/0/a3b/327/4f7/2960686/watch_franckmuller_longisland_950qzd@1200x1200-3751410.webp",
            "https://timecity.by/upload/images/0/163/6e7/48b/2960687/watch_franckmuller_longisland_950qzd@1200x1200-3751410.webp",
            "https://timecity.by/upload/images/0/951/ca7/ebe/2960689/watch_franckmuller_longisland_950qzd@1200x1200-3751410.webp"
        ],
        Description: "Модель Franck Muller Long Island 950 QZ D — изысканные женские часы, излучающие элегантность и утонченность. Эти часы в элегантном прямоугольном корпусе из 18-каратного белого золота украшены безелем, инкрустированным бриллиантами, который придает дизайну нотку роскоши.",
        New: "No",
        Weight: 200,
        Discount: 15,
    },
    {
        Name: "Breitling Transocean",
        Price: 33_500,
        Quantity: 3,
        Image: [
            "https://timecity.by/upload/images/0/a15/0d4/97b/2908124/watch_breitling_transocean_ab051044bb62152a@1200x1200-3751400.webp",
            "https://timecity.by/upload/images/0/e3f/9c0/d8f/2907914/watch_breitling_transocean_ab051044bb62152a@1200x1200-3751410.webp",
            "https://timecity.by/upload/images/0/ce3/135/a41/2907915/watch_breitling_transocean_ab051044bb62152a@1200x1200-3751410.webp",
            "https://timecity.by/upload/images/0/362/ab7/b63/2907917/watch_breitling_transocean_ab051044bb62152a@1200x1200-3751410.webp"
        ],
        Description: "Часы Breitling Transocean Chronograph Unitime 46 mm с автоматическим подзаводом, корпусом из нержавеющей стали диаметром 46 мм с черным циферблатом на стальном браслете. Функции включают часы, минуты, секунды, дату и хронограф.",
        New: "No",
        Weight: 200,
        Discount: 10,
    }
];

const defaultState = {
    catalog: {
        watches: watches.map((item) => {
            return {...item, addedToBasket: false}
        }),
        config: [{key: "Name", direction: 'asc'}]
    },
    basket: {
        list: {
            watch: []
        },
    },
    order: {
        deliveryMethod: "",
        paymentMethod: "",
        address: "",
        currentPage: 1
    },
    listOrders: []
};



const reducers = (state = defaultState, action) => {
    switch (action.type){
        case 'SET_CATALOG_CONFIG':
            return {...state, catalog: {watches: state.catalog.watches, config: action.value}}
        case 'ADD_ITEM_BASKET':
            for(const watch in state.basket.list.watch){
                if(watch.Name === action.item.watch.Name) return state;
            }
            action.item.watch.addedToBasket = true;
            console.log(action.item.watch);
            return {
                ...state,
                catalog: {
                    watches: [...state.catalog.watches.map((item) => {
                        return action.item.watch.Name === item.Name ? action.item.watch : item;
                    })],
                    config: state.catalog.config
                },
                basket: {
                    list: {
                        watch: [...state.basket.list.watch, {...action.item.watch, selected: false, count: 1}]
                    }
                }
            }
        case 'DELETE_ITEM_BASKET':
            action.item.watch.addedToBasket = false;
            return {
                ...state,
                catalog: {
                    watches: state.catalog.watches.map((item) => {
                        return action.item.watch.Name === item.Name ? action.item.watch : item;
                    }),
                    config: state.catalog.config
                },
                basket: {
                    list: {
                        watch: [...state.basket.list.watch.filter((item) => {
                            return item.Name !== action.item.watch.Name;
                        })]
                    }
                }
            }

        case 'UPDATE_BASKET':
            return {
                ...state,
                catalog: {
                    watches: state.catalog.watches,
                    config: state.catalog.config
                },
                basket: {
                    list: {
                        watch: [...action.item]
                    }
                }
            }
        case 'UPDATE_ORDER':
            return {
                ...state,
                order: {
                    deliveryMethod: action.deliveryMethod,
                    paymentMethod: action.paymentMethod,
                    address: action.address,
                    currentPage: action.currentPage
                }
            }
        case 'ADD_ORDER':
            return {
                ...state,
                catalog: {
                    watches: watches.map((item) => {
                        return {...item, addedToBasket: false}
                    }),
                    config: [{key: "Name", direction: 'asc'}]
                },
                basket: {
                    list: {
                        watch: []
                    },
                },
                order: {
                    deliveryMethod: "",
                    paymentMethod: "",
                    address: "",
                    currentPage: 1
                },
                listOrders: [...state.listOrders, {items: action.items, price: action.price}]
            }
        default:
            return state;
    }
}

const store = createStore(reducers);
export default store;