'use client'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { useState } from 'react'

export default function PaginationComponent({
  totalPages,
  pagination,
}: {
  totalPages: number
  pagination: (page: number) => void
}) {
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    pagination(page)
  }

  // Generate pages dynamically
  const getPageNumbers = () => {
    const pages: (number | string)[] = []

    if (totalPages <= 7) {
      // Show all pages if small number
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, 'last')
      }

      if (currentPage >= totalPages - 3) {
        pages.push(
          'first',
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        )
      }

      if (currentPage > 4 && currentPage < totalPages) {
        pages.push(
          'first',
          // '...',
          currentPage - 2,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          currentPage + 2,
          // '...',
          'last'
        )
      }
    }

    return pages
  }

  return (
    <Pagination className="mt-3">
      <PaginationContent>
        {/* <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
          />
        </PaginationItem> */}

        {getPageNumbers().map((page, index) =>
          typeof page === 'number' ? (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                onClick={() => handlePageChange(page)}
                isActive={page === currentPage} // highlight active page
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ) : (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                onClick={() =>
                  handlePageChange(page === 'first' ? 1 : Number(totalPages))
                }
                // isActive={page === currentPage} // highlight active page
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        {/* <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() =>
              currentPage < totalPages && handlePageChange(currentPage + 1)
            }
          />
        </PaginationItem> */}
      </PaginationContent>
    </Pagination>
  )
}
