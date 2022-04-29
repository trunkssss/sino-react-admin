export interface QueryParams {
  roleName?: string;
  roleAlias?: string;
}

export interface RemoveParams {
  ids: string;
}

export interface Role {
  id?: string;
  roleName?: string;
  sort?: string;
  roleAlias?: string;
}

export interface RoleGrantParams {
  menuIds?: string[];
  roleIds?: string[];
}
