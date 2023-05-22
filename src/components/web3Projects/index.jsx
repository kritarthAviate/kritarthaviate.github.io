import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ga, skeleton } from '../../helpers/utils';
import LazyImage from '../lazy-image';

const displaySection = (externalProjects) => {
  if (
    externalProjects &&
    Array.isArray(externalProjects) &&
    externalProjects.length
  ) {
    return true;
  } else {
    return false;
  }
};

const ExternalProject = ({ externalProjects, loading, googleAnalytics }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < externalProjects.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-4 h-full w-full">
            <div className="flex items-center flex-col">
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        width: 'w-32',
                        height: 'h-8',
                        className: 'mb-2 mx-auto',
                      })}
                    </h2>
                    <div className="avatar w-full h-full">
                      <div className="w-20 h-20 mask mask-squircle mx-auto">
                        {skeleton({
                          width: 'w-full',
                          height: 'h-full',
                          shape: '',
                        })}
                      </div>
                    </div>
                    <div className="mt-2">
                      {skeleton({
                        width: 'w-full',
                        height: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                    <div className="mt-2 flex items-center flex-wrap justify-center">
                      {skeleton({
                        width: 'w-full',
                        height: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return array;
  };

  const renderExternalProjects = () => {
    return externalProjects.map((item, index) => (
      <a
        className="card shadow-lg compact bg-base-100 cursor-pointer"
        key={index}
        href={item.link}
        onClick={(e) => {
          e.preventDefault();

          try {
            if (googleAnalytics?.id) {
              ga.event({
                action: 'Click External Project',
                params: {
                  post: item.title,
                },
              });
            }
          } catch (error) {
            console.error(error);
          }

          window?.open(item.link, '_blank');
        }}
      >
        <div className="p-4 h-full w-full">
          <div className="flex items-center flex-col">
            <div className="w-full">
              <div className="px-4">
                <div className="text-center w-full">
                  <h2 className="font-semibold text-lg tracking-wide text-center opacity-60 mb-2">
                    {item.title}
                  </h2>
                  {item.imageUrl && (
                    <div className="avatar opacity-90 gap-2 flex-wrap justify-center items-center">
                      {item.stack.map((s, i) => (
                        <span className="flex items-center" key={i}>
                          <div
                            className="w-2.5 h-2.5 rounded-full mr-1 opacity-40"
                            style={{ backgroundColor: 'grey', gap: 2 }}
                          />
                          <span className="font-bold">{s}</span>
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="mt-2 text-base-content text-opacity-60 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      {displaySection(externalProjects) && (
        <div className="col-span-1 lg:col-span-2">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <div className="card compact bg-base-100 shadow bg-opacity-40">
                <div className="card-body">
                  <div className="mx-3 flex items-center justify-between mb-2">
                    <h5 className="card-title">
                      {loading ? (
                        skeleton({ width: 'w-40', height: 'h-8' })
                      ) : (
                        <span className="text-base-content opacity-70">
                          Web3 Projects
                        </span>
                      )}
                    </h5>
                  </div>
                  <div className="col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {loading ? renderSkeleton() : renderExternalProjects()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

ExternalProject.propTypes = {
  externalProjects: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  googleAnalytics: PropTypes.object,
};

export default ExternalProject;
