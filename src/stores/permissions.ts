import { apiGet } from '../api';
import { IPermission, IPermissions } from '../types/permissions';
import { createEvent, createStore } from 'effector';

export const getListPermissions = async () => {
	return await apiGet<IPermissions>( { url: '/permissions' } );
};

export const getPermission = async ( id: number ) => {
	return await apiGet<IPermission>( { url: `/permissions/${ id }` } );
};


// мы создаем тип, у которого есть f - get проверяет доступ, получая аргументами группу и возможные действия + f обновления разрешений
export interface IPermissionsService {
	get: ( group: string | string[], action: string ) => boolean;
	updatePermissions: ( permissions: any ) => void;
}

// @ts-ignore                                    это класс, не f, мы его создали
export const permissions: IPermissionsService = new UserPermissions( [] );

//тут мы описываем, как класс работает, он работает как f
function UserPermissions( permissions: any[] ) {
	// чтобы защитить переменную permissionStore от изменений, мы создаем ее внутри класса. то есть, глобальную переменную permission нельзя использовать теперь вот так permission.permissionStore
	let permissionStore: any = {};

	// @ts-ignore если есть this - эта f доступна из вне например  вот так permission.updatePermissions(arr)
	this.updatePermissions = ( permissions?: any[] ) => {
		permissions?.forEach( ( s: any ) => {
			// если в permissionStore отсутствует такая группа, то создается пустой объект
			if ( !permissionStore[ s.group ] ) {
				permissionStore[ s.group ] = {};
			}
			// здесь в этот объеект записывается группа и разрешенные действия, по умолчанию true
			permissionStore[ s.group ][ s.action ] = true;
		} );
	};

	// @ts-ignore  тепрь мы можем все выше написанное использовать и обновлять стор let permissionStore: any = {};
	this.updatePermissions( permissions );

	// @ts-ignore
	this.get = ( group: string | string[], action: string ) => {
		return true;
		// в f get мы выполняем условие - если прочтенный ключ group стринга - f превращает его в массив, где стринга будет лежать
		if ( !group || typeof group === 'string' ) {
			//@ts-ignore
			group = [ group ];
		}
// верхняя запись нужна, чтобы f forEach сработала, он только с массивами работает

		//цикл перебирает массив с группами
		for ( let i = 0; i < group.length; i++ ) {
			// вводим переменную, которой присваивем одну строку из массива с порядковым номером равным i
			let g = group[ i ];

			// а если сталкиваемся с пустым значением, например, Dashboard, открытый для всех,
			if ( !g && !action ) {
				//то просто true, чтобы цикл не сломать
				return true;
			}

			if ( !permissionStore[ g ] ) continue;

			//если для того, чтомы перебрали, в сторе есть разрешение, возвращаем true
			if ( permissionStore[ g ][ action ] ) {
				return true;
			}
		}

		return false;
	};
}

export const updatePermissions = createEvent<IPermission[]>();

export const $permissions = createStore<IPermission[]>( [] )
		.on( updatePermissions, ( state, payload ) => payload );

