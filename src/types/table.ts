import {
  TableState,
  TableOptions,
  TableInstance,
  UseSortByState,
  UseGroupByState,
  UseFiltersState,
  UseSortByOptions,
  UseExpandedState,
  UseRowStateState,
  UseGroupByOptions,
  UseRowSelectState,
  UseFiltersOptions,
  UseExpandedOptions,
  UseRowStateOptions,
  UsePaginationState,
  UseTableColumnProps,
  UseRowSelectOptions,
  UsePaginationOptions,
  Column as BaseColumn,
  UseSortByColumnProps,
  UseFiltersColumnProps,
  UseGlobalFiltersState,
  UseSortByColumnOptions,
  UseSortByInstanceProps,
  UseFiltersColumnOptions,
  UseGroupByInstanceProps,
  UseFiltersInstanceProps,
  UseGlobalFiltersOptions,
  UseExpandedInstanceProps,
  UseRowStateInstanceProps,
  UseRowSelectInstanceProps,
  UsePaginationInstanceProps,
  UseColumnOrderInstanceProps,
  UseGlobalFiltersColumnOptions,
  UseGlobalFiltersInstanceProps,
} from "react-table";

export type Keys<T> = keyof T;

export type Feature =
  | "sortBy"
  | "filters"
  | "rowSelect"
  | "expanded"
  | "pagination"
  | "globalFilter";

export type UseSortByInstance = UseSortByInstanceProps<{}> & UseSortByState<{}>;

export type SortByFeaturePropsList = Keys<UseSortByInstance>;

export type SortByFeatureColumnPropsList = Keys<
  UseSortByColumnProps<{}> & Pick<UseTableColumnProps<{}>, "id">
>;

export type UsePaginationInstance = UsePaginationInstanceProps<{}> &
  UsePaginationState<{}>;

export type PaginationFeaturePropsList = Keys<UsePaginationInstance>;

interface BaseTableInstance<D extends object>
  extends TableInstance<D>,
    UseSortByInstanceProps<D>,
    UseGroupByInstanceProps<D>,
    UseFiltersInstanceProps<D>,
    UseExpandedInstanceProps<D>,
    UseRowStateInstanceProps<D>,
    UseRowSelectInstanceProps<D>,
    UsePaginationInstanceProps<D>,
    UseColumnOrderInstanceProps<D>,
    UseGlobalFiltersInstanceProps<D> {}

export interface ExtendedTableInstance<D extends object = {}>
  extends Omit<BaseTableInstance<D>, "columns"> {
  columns: ExtendedTableColumnProps[];
  state: ExtendedTableState;
}

export type ExtendedTableColumnOptions<D extends object = {}> = BaseColumn &
  UseSortByColumnOptions<D> &
  UseFiltersColumnOptions<D> &
  UseGlobalFiltersColumnOptions<D>;

export interface ExtendedTableColumnProps<D extends object = {}>
  extends UseTableColumnProps<D>,
    UseSortByColumnProps<D>,
    UseFiltersColumnProps<D>,
    UseFiltersColumnProps<D> {}

export interface ExtendedTableState<D extends object = {}>
  extends TableState<D>,
    UseSortByState<D>,
    UseGroupByState<D>,
    UseFiltersState<D>,
    UseExpandedState<D>,
    UseRowStateState<D>,
    UseRowSelectState<D>,
    UsePaginationState<D>,
    UseGlobalFiltersState<D> {}

export interface ExtendedTableOptions<D extends object = {}>
  extends TableOptions<D>,
    UseFiltersOptions<D>,
    UseExpandedOptions<D>,
    UseRowStateOptions<D>,
    UseRowSelectOptions<D>,
    UsePaginationOptions<D>,
    UseGroupByOptions<D>,
    UseSortByOptions<D>,
    UseGlobalFiltersOptions<D> {
  initialState?: Partial<ExtendedTableState>;
}

export interface HeaderProps {
  instance: ExtendedTableInstance;
}
