import React from "react";
import data from "@/data/replicator/coverage.json";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";

const coverage = Object.values(data);

const columns: ColumnDef<any>[] = [
  {
    accessorKey: "resource_type",
    header: () => "Resource Type",
    cell: ({ row }) => row.original.resource_type,
  },
  {
    accessorKey: "service",
    header: () => "Service",
    cell: ({ row }) => row.original.service,
  },
  {
    accessorKey: "identifier",
    header: () => "Identifier",
    cell: ({ row }) => row.original.identifier,
  },
  {
    accessorKey: "policy_statements",
    header: () => "Required Actions",
    cell: ({ row }) => (
      <>
        {row.original.policy_statements.map((s: string, i: number) => (
          <div key={i}>{s}</div>
        ))}
      </>
    ),
  },
  {
    id: "arn_support",
    header: () => "Arn Support",
    cell: () => "✔️",
  },
];

export default function PersistenceCoverage() {
  const table = useReactTable({
    data: coverage,
    columns,
    getCoreRowModel: getCoreRowModel(),
    debugTable: false,
  });

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const meta = header.column.columnDef.meta as { className?: string } | undefined;
                  return (
                    <TableHead
                      key={header.id}
                      className={meta?.className || ""}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  const meta = cell.column.columnDef.meta as { className?: string } | undefined;
                  return (
                    <TableCell
                      key={cell.id}
                      className={meta?.className || undefined}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
} 