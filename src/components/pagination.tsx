import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export default function PaginationComponent() {
  return (
    <>
      <Pagination className="mt-3">
        <PaginationContent>
          <PaginationItem className="paginationButton">
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem className="paginationButton">
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem className="paginationButton">
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem className="paginationButton">
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem className="paginationButton">
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem className="paginationButton">
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  )
}
