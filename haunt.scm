(use-modules (haunt asset)
             (haunt builder blog)
             (haunt builder atom)
             (haunt builder assets)
             (haunt reader commonmark)
             (haunt site))

(site #:title "Shreyan Jain's Blog"
      #:domain "me.shreyanjain.net"
      #:default-metadata
      '((author . "Shreyan Jain")
        (email  . "shreyan.jain.9@outlook.com"))
      #:readers (list commonmark-reader)
      #:builders (list (blog)
                       (atom-feed)
                       (atom-feeds-by-tag)
                       (static-directory "images")))
