(use-package typescript-mode
  :ensure t
  :mode ("\\.ts\\'" . typescript-mode))

(add-to-list 'auto-mode-alist '("\\.ts\\'" . typescript-mode))
