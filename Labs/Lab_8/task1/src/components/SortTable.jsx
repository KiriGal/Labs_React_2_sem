import React, {useEffect, useState} from 'react';
import "./SortTableStyle.css";

const watches = [
    {
        name: "Breitling Chronomat",
        price: 37_900,
        quantity: 3,
        image: [
            "https://timecity.by/upload/images/0/846/179/d83/2962568/watch_breitling_chronomat_cb014012g713@1200x1200-3751400.webp",
            "https://timecity.by/upload/images/0/218/11b/32f/2962569/watch_breitling_chronomat_cb014012g713@1200x1200-3751410.webp",
            "https://timecity.by/upload/images/0/78f/316/6ea/2962570/watch_breitling_chronomat_cb014012g713@1200x1200-3751410.webp",
            "https://timecity.by/upload/images/0/82d/65a/a8e/2962572/watch_breitling_chronomat_cb014012g713@1200x1200-3751410.webp"
        ],
        description: "Универсальные часы Breitling незаменимы для любого случая: они станут вашими надежными спутниками на красной дорожке и на пляже. Выпуск Chronomat в 1984 году совпал со столетним юбилеем Breitling и ознаменовал возвращение механических хронографов в семейство элитных часов Breitling. Спустя почти четыре десятилетия Chronomat остается воплощением решительности, позитива и стиля.",
        new: "Yes",
        discount: 30,
    },
    {
        name: "Maurice Lacroix Aikon",
        price: 7_500,
        quantity: 3,
        image: [
            "https://timecity.by/upload/images/0/d1c/9c5/3ce/2961988/watch_mauricelacroix_aikon_ai6008ss0013311@1200x1200-3751400.webp",
            "https://timecity.by/upload/images/0/757/ef1/3cf/2961989/watch_mauricelacroix_aikon_ai6008ss0013311@1200x1200-3751410.webp",
            "https://timecity.by/upload/images/0/247/437/829/2961990/watch_mauricelacroix_aikon_ai6008ss0013311@1200x1200-3751410.webp",
            "https://timecity.by/upload/images/0/931/eae/046/2961992/watch_mauricelacroix_aikon_ai6008ss0013311@1200x1200-3751410.webp"
        ],
        description: "Современная эстетика в урбанистическом стиле, эргономичный дизайн и механическое сердце делают его идеальным спутником городской жизни. Благодаря игривому использованию контрастов и форм AIKON Automatic делает смелое заявление.",
        new: "Yes",
        discount: 20,
    },
    {
        name: "Frederique Constant Classics",
        price: 4_500,
        quantity: 3,
        image: [
            "https://timecity.by/upload/images/0/fe8/6d7/a87/2961931/watch_frederiqueconstant_classics_fc303bn5b6b@1200x1200-3751400.webp",
            "https://timecity.by/upload/images/0/d37/e0d/c8d/2961932/watch_frederiqueconstant_classics_fc303bn5b6b@1200x1200-3751410.webp",
            "https://timecity.by/upload/images/0/ea5/5d4/1e7/2961933/watch_frederiqueconstant_classics_fc303bn5b6b@1200x1200-3751410.webp",
            "https://timecity.by/upload/images/0/eed/762/a90/2961935/watch_frederiqueconstant_classics_fc303bn5b6b@1200x1200-3751410.webp"
        ],
        description: "Часы Frederique Constant Classics Index Automatic FC-303BN5B6B – это классические и изысканные часы. Четкие линии и классический внешний вид являются отличительными чертами часов классической коллекции. Другие атрибуты включают в себя надежность и долговечность. Каждая модель в классической коллекции была разработана для самых требовательных стандартов. Компания Frederique Constant остается верной традиции доступности роскошных часов для любого человека.",
        new: "No",
        discount: 0,
    },
    {
        name: "Franck Muller Long Island",
        price: 86_200,
        quantity: 3,
        image: [
            "https://timecity.by/upload/images/0/d3f/76d/e56/2960741/watch_franckmuller_longisland_950qzd@1200x1200-3751400.webp",
            "https://timecity.by/upload/images/0/a3b/327/4f7/2960686/watch_franckmuller_longisland_950qzd@1200x1200-3751410.webp",
            "https://timecity.by/upload/images/0/163/6e7/48b/2960687/watch_franckmuller_longisland_950qzd@1200x1200-3751410.webp",
            "https://timecity.by/upload/images/0/951/ca7/ebe/2960689/watch_franckmuller_longisland_950qzd@1200x1200-3751410.webp"
        ],
        description: "Модель Franck Muller Long Island 950 QZ D — изысканные женские часы, излучающие элегантность и утонченность. Эти часы в элегантном прямоугольном корпусе из 18-каратного белого золота украшены безелем, инкрустированным бриллиантами, который придает дизайну нотку роскоши.",
        new: "No",
        discount: 15,
    },
    {
        name: "Breitling Transocean",
        price: 33_500,
        quantity: 3,
        image: [
            "https://timecity.by/upload/images/0/a15/0d4/97b/2908124/watch_breitling_transocean_ab051044bb62152a@1200x1200-3751400.webp",
            "https://timecity.by/upload/images/0/e3f/9c0/d8f/2907914/watch_breitling_transocean_ab051044bb62152a@1200x1200-3751410.webp",
            "https://timecity.by/upload/images/0/ce3/135/a41/2907915/watch_breitling_transocean_ab051044bb62152a@1200x1200-3751410.webp",
            "https://timecity.by/upload/images/0/362/ab7/b63/2907917/watch_breitling_transocean_ab051044bb62152a@1200x1200-3751410.webp"
        ],
        description: "Часы Breitling Transocean Chronograph Unitime 46 mm с автоматическим подзаводом, корпусом из нержавеющей стали диаметром 46 мм с черным циферблатом на стальном браслете. Функции включают часы, минуты, секунды, дату и хронограф.",
        new: "No",
        discount: 10,
    }
];

const tableHeader = ["№", "Name", "Price", "Quantity", "Image", "Description", "New", "Discount"];

const SortTable = () => {
    const [sortedWatches, setSortedWatches] = useState(watches);
    const [sortConfig, setSortConfig] = useState({key: "Name", direction: 'asc'});

    useEffect(() => {
        const sorted = [...sortedWatches].sort((a, b) => {
            const valueA = a[sortConfig.key];
            const valueB = b[sortConfig.key];
            if (valueA < valueB) {
                return sortConfig.direction === 'asc' ? -1 : 1;
            }
            if (valueA > valueB) {
                return sortConfig.direction === 'asc' ? 1 : -1;
            }
            return 0;
        });

        setSortedWatches(sorted);
    }, [sortConfig]);

    const handleSort = (sort, header) => {
        if(sort === "▲"){
            setSortConfig({key: header, direction: "desc"});
        }else{
            setSortConfig({key: header, direction: "asc"});
        }
    }

    return (
        <div>
            <table>
                <tr>
                    {tableHeader.map((header, index) => {
                        return <th key={index}>
                                    <h4>{header}</h4>
                                    {(header !== "№" && header !== "Image" && header !== "Description" && header !== "New") ? (
                                        <button onClick={() => handleSort((sortConfig.direction === "asc" && sortConfig.key === header.toLowerCase()) ? ("▲") : ("▼"), header.toLowerCase())}>{(sortConfig.direction === "asc" && sortConfig.key === header.toLowerCase()) ? ("▲") : ("▼")}
                                        </button>
                                    ) : null}
                                </th>
                    })}
                </tr>
                {sortedWatches.map((watch, index) => {
                    return <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{watch.name}</td>
                        <td>{watch.price} BYN</td>
                        <td>{watch.quantity}</td>
                        <td><img src={watch.image[0]} alt="No img"/></td>
                        <td>{watch.description}</td>
                        <td>{watch.new}</td>
                        <td>{watch.discount}</td>
                    </tr>
                })}
            </table>
        </div>
    );
};

export default SortTable;