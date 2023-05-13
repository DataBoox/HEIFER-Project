interface CardContainerProps {
  cardHeaderTitle?: string;
  cardHeaderProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;
  leftCardHeaderComponent?: React.ReactNode;
  rightCardHeaderComponent?: React.ReactNode;
  bodyClassName?: string;
  children?: React.ReactNode;
}
export const DashboardCardContainer: React.FC<CardContainerProps> = ({
  cardHeaderTitle,
  cardHeaderProps,
  leftCardHeaderComponent,
  rightCardHeaderComponent,
  bodyClassName,
  children,
}) => {
  return (
    <div className="card custom-card">
      <div className="card-header align-items-center d-flex">
        {leftCardHeaderComponent}
        <h4
          className="card-title mb-0 flex-grow-1 fw-bold"
          style={{
            color: "#2A4153",
          }}
          {...cardHeaderProps}
        >
          {cardHeaderTitle}
        </h4>
        {rightCardHeaderComponent}
      </div>
      <div className={`card-body ${bodyClassName}`}>{children}</div>
    </div>
  );
};
