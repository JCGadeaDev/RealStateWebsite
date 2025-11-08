import React, { useState } from 'react';
// --- ACTUALIZADO: Importamos los iconos de Lucide ---
import {
  Upload,
  FolderOpen,
  CreditCard,
  Scale,
  Search,
  Shield,
  Calculator,
  User,
  FileText,
  FileCheck,
  Users,
  File,
  HardDrive,
  Calendar,
  Eye,
  Download,
  Share2,
  MoreVertical,
} from 'lucide-react';
import Button from '../../../components/ui/Button';
import { cn } from '../../../utils/cn';

// --- NUEVO: Mapeo de iconos para carpetas ---
const folderIconMap = {
  FolderOpen: FolderOpen,
  CreditCard: CreditCard,
  Scale: Scale,
  Search: Search,
  Shield: Shield,
  Calculator: Calculator,
  User: User,
};

// --- NUEVO: Mapeo de iconos para tipos de documento ---
const docIconMap = {
  FileText: FileText,
  FileCheck: FileCheck,
  Shield: Shield,
  Calculator: Calculator,
  User: User,
};

const DocumentCenter = () => {
  const [activeFolder, setActiveFolder] = useState('all');

  // Los datos usan los nombres de los iconos de Lucide
  const documents = [
    {
      id: 1,
      name: 'Pre-Approval Letter - Banco Santander',
      type: 'PDF',
      size: '2.4 MB',
      uploadDate: '2024-10-22',
      category: 'financing',
      status: 'approved',
      shared: true,
      icon: 'FileText', // Coincide con docIconMap
    },
    {
      id: 2,
      name: 'Property Inspection Report - Barcelona Penthouse',
      type: 'PDF',
      size: '8.7 MB',
      uploadDate: '2024-10-21',
      category: 'inspection',
      status: 'pending',
      shared: false,
      icon: 'FileCheck', // Coincide con docIconMap
    },
    {
      id: 3,
      name: 'Purchase Agreement Draft',
      type: 'DOCX',
      size: '1.2 MB',
      uploadDate: '2024-10-20',
      category: 'legal',
      status: 'review',
      shared: true,
      icon: 'FileText', // Coincide con docIconMap
    },
    {
      id: 4,
      name: 'Insurance Quote - Mapfre',
      type: 'PDF',
      size: '890 KB',
      uploadDate: '2024-10-19',
      category: 'insurance',
      status: 'approved',
      shared: false,
      icon: 'Shield', // Coincide con docIconMap
    },
    {
      id: 5,
      name: 'Tax Assessment - Madrid Property',
      type: 'PDF',
      size: '3.1 MB',
      uploadDate: '2024-10-18',
      category: 'tax',
      status: 'approved',
      shared: true,
      icon: 'Calculator', // Coincide con docIconMap
    },
    {
      id: 6,
      name: 'Identity Verification Documents',
      type: 'ZIP',
      size: '5.2 MB',
      uploadDate: '2024-10-15',
      category: 'identity',
      status: 'approved',
      shared: false,
      icon: 'User', // Coincide con docIconMap
    },
  ];

  const folders = [
    {
      id: 'all',
      name: 'All Documents',
      count: documents?.length,
      icon: 'FolderOpen', // Coincide con folderIconMap
    },
    {
      id: 'financing',
      name: 'Financing',
      count: documents?.filter((d) => d?.category === 'financing')?.length,
      icon: 'CreditCard', // Coincide con folderIconMap
    },
    {
      id: 'legal',
      name: 'Legal Documents',
      count: documents?.filter((d) => d?.category === 'legal')?.length,
      icon: 'Scale', // Coincide con folderIconMap
    },
    {
      id: 'inspection',
      name: 'Inspections',
      count: documents?.filter((d) => d?.category === 'inspection')?.length,
      icon: 'Search', // Coincide con folderIconMap
    },
    {
      id: 'insurance',
      name: 'Insurance',
      count: documents?.filter((d) => d?.category === 'insurance')?.length,
      icon: 'Shield', // Coincide con folderIconMap
    },
    {
      id: 'tax',
      name: 'Tax Documents',
      count: documents?.filter((d) => d?.category === 'tax')?.length,
      icon: 'Calculator', // Coincide con folderIconMap
    },
    {
      id: 'identity',
      name: 'Identity',
      count: documents?.filter((d) => d?.category === 'identity')?.length,
      icon: 'User', // Coincide con folderIconMap
    },
  ];

  // --- ACTUALIZADO: getStatusColor usa la nueva paleta de Tailwind ---
  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-success/20 text-success';
      case 'pending':
        return 'bg-warning/20 text-warning';
      case 'review':
        return 'bg-primary/20 text-primary';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'approved':
        return 'Approved';
      case 'pending':
        return 'Pending Review';
      case 'review':
        return 'Under Review';
      default:
        return 'Unknown';
    }
  };

  const filteredDocuments =
    activeFolder === 'all'
      ? documents
      : documents?.filter((doc) => doc?.category === activeFolder);

  return (
    // --- ACTUALIZADO: border-border ---
    <div className="bg-card rounded-lg shadow-luxury border border-border">
      {/* --- ACTUALIZADO: border-border --- */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-playfair font-medium text-foreground">
            Document Center
          </h2>
          {/* --- ACTUALIZADO: Botón con prop 'icon' --- */}
          <Button
            variant="default"
            size="sm"
            icon={<Upload size={16} />}
          >
            Upload Document
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {folders?.map((folder) => {
            // --- NUEVO: Obtenemos el icono del map ---
            const IconComponent = folderIconMap[folder.icon];
            return (
              <button
                key={folder?.id}
                onClick={() => setActiveFolder(folder?.id)}
                className={cn(
                  'flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-inter font-medium transition-colors duration-200',
                  activeFolder === folder?.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                )}
              >
                {/* --- ACTUALIZADO: Renderizamos el icono de Lucide --- */}
                {IconComponent && <IconComponent size={16} />}
                <span>{folder?.name}</span>
                <span
                  className={cn(
                    'px-2 py-0.5 text-xs rounded-full',
                    activeFolder === folder?.id
                      ? 'bg-primary-foreground/20 text-primary-foreground'
                      : 'bg-background'
                  )}
                >
                  {folder?.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-3">
          {filteredDocuments?.map((document) => {
            // --- NUEVO: Obtenemos el icono del map ---
            const IconComponent = docIconMap[document.icon];
            return (
              <div
                key={document?.id}
                // --- ACTUALIZADO: border-border ---
                className="flex items-center space-x-4 p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  {/* --- ACTUALIZADO: Renderizamos el icono de Lucide --- */}
                  {IconComponent && (
                    <IconComponent size={20} className="text-muted-foreground" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-sm font-inter font-medium text-foreground truncate">
                      {document?.name}
                    </h3>
                    <div className="flex items-center space-x-2 ml-4 flex-shrink-0">
                      {document?.shared && (
                        // --- ACTUALIZADO: Icono de Lucide ---
                        <Users
                          size={14}
                          className="text-primary"
                          title="Shared with agent"
                        />
                      )}
                      <span
                        className={cn(
                          'px-2 py-1 text-xs font-medium rounded-full',
                          getStatusColor(document?.status)
                        )}
                      >
                        {getStatusText(document?.status)}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span className="flex items-center">
                      {/* --- ACTUALIZADO: Icono de Lucide --- */}
                      <File size={12} className="mr-1" />
                      {document?.type}
                    </span>
                    <span className="flex items-center">
                      {/* --- ACTUALIZADO: Icono de Lucide --- */}
                      <HardDrive size={12} className="mr-1" />
                      {document?.size}
                    </span>
                    <span className="flex items-center">
                      {/* --- ACTUALIZADO: Icono de Lucide --- */}
                      <Calendar size={12} className="mr-1" />
                      {document?.uploadDate}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-1">
                  {/* --- ACTUALIZADO: Botones con prop 'icon' y 'size="icon"' --- */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8"
                    icon={<Eye size={14} />}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8"
                    icon={<Download size={14} />}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8"
                    icon={<Share2 size={14} />}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8"
                    icon={<MoreVertical size={14} />}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {filteredDocuments?.length === 0 && (
          <div className="text-center py-12">
            {/* --- ACTUALIZADO: Icono de Lucide --- */}
            <FolderOpen
              size={48}
              className="mx-auto text-muted-foreground mb-4"
            />
            <h3 className="text-lg font-playfair font-medium text-foreground mb-2">
              No documents found
            </h3>
            <p className="text-muted-foreground mb-4">
              Upload your first document to get started
            </p>
            {/* --- ACTUALIZADO: Botón con prop 'icon' --- */}
            <Button
              variant="default"
              icon={<Upload size={16} />}
            >
              Upload Document
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentCenter;