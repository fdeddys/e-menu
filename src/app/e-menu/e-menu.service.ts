import { Injectable } from '@angular/core';
import { EMenuGroup, EMenuItem, Resto } from './e-menu.model';

@Injectable({
    providedIn: 'root'
})
export class EMenuService {

    private restos: Resto[] = [
        {
            id: 1,
            name: 'Rumah Makan Enak',
            description: 'Spesial Makan Enak dan murah ...'
        }, {
            id: 2,
            name: 'Restaurant Numero One',
            description: 'Our specialization is western food, yummy.. '
        }
    ];

    private eMenuGroups: EMenuGroup[] = [
    {
        id: 1,
        name: 'Nasi',
        imgURL : 'https://i.picsum.photos/id/1025/200/300.jpg',
        restoId: 1,
    }, {
        id: 2,
        name: 'Mie',
        imgURL : 'https://i.picsum.photos/id/0/200/300.jpg',
        restoId: 1,
    }, {
        id: 3,
        name: 'Ikan',
        imgURL : 'https://i.picsum.photos/id/204/200/300.jpg',
        restoId: 1,
    }, {
        id: 4,
        name: 'Paket',
        imgURL : 'https://i.picsum.photos/id/250/400/400.jpg',
        restoId: 1,
    }, {
        id: 5,
        name: 'Nasi',
        imgURL : 'https://i.picsum.photos/id/1025/200/300.jpg',
        restoId: 2,
    }, {
        id: 6,
        name: 'Mie',
        imgURL : 'https://i.picsum.photos/id/0/200/300.jpg',
        restoId: 2,
    }];

    private eMenuItems: EMenuItem[] = [
        {
            id: 1,
            groupId: 1,
            name: 'Nasi Goreng Ayam',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque at ipsum ut metus vestibulum pharetra eget at mauris.
            Nulla pellentesque molestie sem, vel vulputate ligula commodo quis.
            Aenean vestibulum id nisl ut iaculis. Cras feugiat felis in ex aliquam, vitae ullamcorper lorem pellentesque.
            Mauris hendrerit urna eget
            rhoncus sagittis. Donec eleifend, quam id commodo dignissim, risus orci pulvinar nibh, et commodo nisl metus at velit.
            Quisque ultrices augue quis condimentum fringilla.`,
            imgURL : 'https://i.picsum.photos/id/1025/400/400.jpg',
            price: 15000,
            restoId: 1,
        }, {
            id: 2,
            groupId: 5,
            name: 'Nasi Goreng Sapi',
            description: `Proin a magna velit. Maecenas sed turpis gravida, pretium elit vel, 
            varius nulla. Sed sodales libero a eleifend faucibus. Morbi non sollicitudin quam. 
            Integer malesuada nisl eros, id blandit augue venenatis ut. Nulla ut nunc sollicitudin 
            augue rhoncus fermentum. Quisque et augue massa. Nullam tempus et sem eu pretium.
            Nam odio purus, accumsan vel mauris vitae, sodales consequat libero. Cras non elit eu turpis lobortis fringilla. 
            Nulla lacus nibh, eleifend in nibh dictum, venenatis accumsan neque. Aenean euismod ligula eu dui rhoncus mattis. 
            Donec tincidunt ex vel elementum hendrerit. Morbi euismod sollicitudin enim nec commodo. Suspendisse eu luctus arcu. 
            Proin volutpat dui a orci ultricies, vitae egestas nisl auctor. Donec eu porttitor nisl. Sed et gravida neque.


            Mauris nec odio urna. Donec malesuada velit odio, aliquet tincidunt justo porttitor ut. 
            Vivamus a magna nec nisi accumsan malesuada. 
            Aliquam vel nunc id erat efficitur commodo ac ut felis. Ut commodo in est vel laoreet.


            Duis scelerisque arcu quis metus lobortis, porttitor interdum purus imperdiet`,
            imgURL : 'https://i.picsum.photos/id/1003/400/400.jpg',
            price: 25000,
            restoId: 2,
        }, {
            id: 3,
            groupId: 1,
            name: 'Nasi Goreng Ayam',
            description: 'Nasi Goreng pake ayam 1 ekor',
            imgURL : 'https://i.picsum.photos/id/104/400/400.jpg',
            price: 20000,
            restoId: 1,
        }, {
            id: 4,
            groupId: 1,
            name: 'Nasi Goreng Seafood',
            description: 'Nasi Goreng udang, cumi',
            imgURL : 'https://i.picsum.photos/id/1050/400/400.jpg',
            price: 17500,
            restoId: 1,
        }, {
            id: 5,
            groupId: 2,
            name: 'Mie Pangsit',
            description: 'Mie pangsit suir ayam',
            imgURL : 'https://i.picsum.photos/id/1056/400/400.jpg',
            price: 15000,
            restoId: 1,
        }, {
            id: 6,
            groupId: 6,
            name: 'Mie Goreng',
            description: 'Indomie goreng telor',
            imgURL : 'https://i.picsum.photos/id/1074/400/400.jpg',
            price: 3000,
            restoId: 2,
        }, {
            id: 7,
            groupId: 3,
            name: 'Ikan Gurame asam manis',
            description: 'Ikan gurame dengan bumbu asam manis mantap',
            imgURL : 'https://i.picsum.photos/id/113/400/400.jpg',
            price: 35500,
            restoId: 1,
        }, {
            id: 8,
            groupId: 4,
            name: 'Pahe 1',
            description: 'Nasi ikan bumbu cabe ijo',
            imgURL : 'https://i.picsum.photos/id/132/400/400.jpg',
            price: 20100,
            restoId: 1,
        }, {
            id: 9,
            groupId: 4,
            name: 'Pahe 2',
            description: 'Ayam bumbu krispi geprek pake cabe merah',
            imgURL : 'https://i.picsum.photos/id/124/400/400.jpg',
            price: 21100,
            restoId: 1,
        }, {
            id: 10,
            groupId: 1,
            name: 'Nasi Goreng spesial',
            description: 'Nasi Goreng pake telor',
            imgURL : 'https://i.picsum.photos/id/139/400/400.jpg',
            price: 17500,
            restoId: 1,
        }, {
            id: 11,
            groupId: 5,
            name: 'Nasi Goreng putih',
            description: 'Nasi Goreng metega',
            imgURL : 'https://i.picsum.photos/id/146/400/400.jpg',
            price: 17510,
            restoId: 2,
        }, {
            id: 12,
            groupId: 5,
            name: 'Nasi Goreng rendang',
            description: 'Nasi Goreng bumbu rendang',
            imgURL : 'https://i.picsum.photos/id/152/400/400.jpg',
            price: 17520,
            restoId: 2,
        }, {
            id: 13,
            groupId: 1,
            name: 'Nasi Goreng Nanas',
            description: 'Nasi Goreng pakek nanas',
            imgURL : 'https://i.picsum.photos/id/159/400/400.jpg',
            price: 17500,
            restoId: 1,
        },
    ];

    constructor() { }

    getAllGroupMenu(restoId: number) {
        let result: EMenuGroup[] = [];

        console.log('id->', restoId);
        this.eMenuGroups.forEach(menuGroup => {
            console.log(menuGroup);
            if ( menuGroup.restoId === restoId) {
                result.push(menuGroup);
            }
        });
        console.log(result);
        return result;
        // return this.eMenuGroups;
        //  [...this.eMenuGroups];
    }

    getAllItemByGroupId(id: number, restoId: number) {

        let result: EMenuItem[] = [];

        console.log('id->', id);
        this.eMenuItems.forEach(menuItm => {
            console.log(menuItm);
            if ( menuItm.groupId === id && menuItm.restoId === restoId) {
                result.push(menuItm);
            }
        });
        console.log(result);
        return result;
    }

    getRestoById(restoId: number) {
        let result: Resto[] = [];

        console.log('id->', restoId);
        this.restos.forEach(resto => {
            console.log(resto);
            if ( resto.id === restoId) {
                result.push(resto);
            }
        });
        console.log(result);
        return result[0];
    }
}
