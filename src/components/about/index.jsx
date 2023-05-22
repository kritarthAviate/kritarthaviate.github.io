import { Fragment } from 'react';
import PropTypes from 'prop-types';

const ExternalProject = ({ externalProjects }) => {
  const item = externalProjects;
  const renderExternalProjects = () => {
    return (
      <div className="card shadow-lg compact bg-base-100 " key={item.title}>
        <div className="p-4 h-full w-full">
          <div className="flex items-center flex-col">
            <div className="w-full">
              <div className="px-4">
                <div className="text-left w-full">
                  <h2 className="font-semibold text-lg tracking-wide text-left opacity-60 mb-2">
                    {item.title}
                  </h2>
                  {item.imageUrl && (
                    <div className="avatar opacity-90">
                      {item.stack.map((s, i) => (
                        <span className="flex items-center" key={i}>
                          <div
                            className="w-2.5 h-2.5 rounded-full mr-1 opacity-40"
                            style={{ backgroundColor: 'grey', gap: 2 }}
                          />
                          <span>{s}</span>
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="text-base-content text-opacity-60 text-sm">
                    So, picture this: it's 1997, and I enter this crazy world
                    full of possibilities. Fast forward to today, and I'm here
                    in India, working remotely and dreaming of going on a world
                    tour with just my laptop. 🌍💼 Who needs a suitcase when
                    you've got coding skills, right? 😉
                  </p>
                  <br />
                  <p className="text-base-content text-opacity-60 text-sm">
                    Since forever, I've have had love for all things technology.
                    From coding to finance and even the captivating world of
                    blockchain, I just can't get enough! I also love the
                    incredible artistry that goes into making movies. 🎥✨ I'm
                    the kind of person who loves analyzing films and
                    documentaries and diving into fascinating discussions about
                    them.
                  </p>
                  <br />

                  <p className="text-base-content text-opacity-60 text-sm">
                    My first gig was a six-month stint at Accenture as an
                    Associate Software Engineer. But destiny had something
                    exciting in store for me. Soon enough, I stumbled upon an
                    opportunity to work as a web developer intern at Parcel
                    Tech, a Web3 startup based in the US. Starting as an intern,
                    I poured my heart and soul into my work, and my dedication
                    paid off big time! I got promoted to the position of senior
                    full-stack engineer in less than two years. 🚀👨‍💻
                  </p>
                  <br />

                  <p className="text-base-content text-opacity-60 text-sm">
                    I absolutely love connecting with fellow movie buffs, coding
                    enthusiasts, finance fanatics, and those who are intrigued
                    by Web3. If you're interested in having captivating
                    conversations or diving into exciting projects, I'd be
                    delighted to chat with you! Feel free to reach out to me via
                    email, Twitter, or LinkedIn. 🎉🎬🍿
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      {
        <div className="col-span-1 lg:col-span-2">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <div className="card compact bg-base-100 shadow bg-opacity-40">
                <div className="card-body">
                  <div className="mx-3 flex items-center justify-between mb-2">
                    <h5 className="card-title">
                      {
                        <span className="text-base-content opacity-70">
                          About me
                        </span>
                      }
                    </h5>
                  </div>
                  <div className="col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-0">
                      {renderExternalProjects()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </Fragment>
  );
};

ExternalProject.propTypes = {
  externalProjects: PropTypes.array,
  googleAnalytics: PropTypes.object,
};

export default ExternalProject;
