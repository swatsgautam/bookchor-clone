import React, {useState} from 'react'
const descriptionFull = `
  April of 2022 marks a 25-year milestone for the personal finance classic Rich Dad Poor Dad, which still ranks as the #1 personal finance book of all time. And although 25 years have passed since Rich Dad Poor Dad was first published, readers will find that very little in the book itself has changed — and for good reason. While so much in our world is changing at high speed, the lessons about money and the principles of Rich Dad Poor Dad haven’t changed. Today, as money continues to play a key role in our daily lives, the messages in Robert Kiyosaki’s international bestseller are more timely and more important than ever.

Milestones

While there is a milestone to commemorate — and a new section in the book on why milestones are important — preserving the integrity of the original content is testimony to the fact that this book has truly stood the test of time. The sidebars throughout the book (that were updated for the 20-year anniversary edition) have been updated again, but the core principles that parents and grandparents — those who embraced Robert’s story and messages 25 years ago — are sharing them with new generations who have found that its timeless wisdom and no-nonsense lessons can be applied to anyone’s life and their vision for a future that includes taking control of their finances.

People of all cultures and countries celebrate milestones. We use them to measure time, mark progress, reflect on the lessons we’ve learned, and celebrate accomplishments. They give meaning to our life’s journey. They are a way that we integrate past, present, and future, looking back at where we started, where we are today, and the promise of all that the future can hold.

In the quarter century that has passed since Rich Dad Poor Dad was first published — 25 years since April 8, 1997 — so many things in our world have changed. But the one thing that has not changed is the pressing need for and the power of financial education. Money is still a mainstay of our lives, like it or not, and technology has brought both speed and innovations to the world of money. In an ever-changing world, we can all still get smarter when it comes to money and learn as much as we can to secure our future.

Still the One… #1

Today, Rich Dad Poor Dad consistently ranks among bestsellers around the world in the categories of personal finance, parenting, and investing. It has been translated into 38 languages and has sold more than 40 million copies worldwide.

Rich Dad Poor Dad is Robert's story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you.

In many ways, the messages of Rich Dad Poor Dad, messages that were challenged and criticized 25 years ago, are more meaningful, relevant, and important today than ever.
`;

const descriptionShort = `
  April Of 2022 Marks A 25-year Milestone For The Personal Finance Classic Rich Dad Poor Dad That Still Ranks As The #1 Personal Finance Book Of All Time. And Although 25 Years Have Passed Since Rich Dad Poor Dad Was First Published...
`;

const Description = () => {
    const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };
  // Function to render the description with paragraph structure
  const renderFullDescription = () => {
    // Split the full description into paragraphs based on new lines
    return descriptionFull.trim().split('\n\n').map((paragraph, index) => (
      <p key={index} style={{ marginBottom: '1.5em' }}>{paragraph.trim()}</p>
    ));
  };
  return (
    <div className="Description-row">
      <ul className="Description_nav">
        <li><a href="/" className="active">Details</a></li>
        <li><a href="/">Author</a></li>
        <li><a href="/">Reviews</a></li>
      </ul>

      <div className="Description_content">
        <div className="Description">
          <h3>Description</h3>

          {isExpanded ? (
            <p id="desc_full">
              {renderFullDescription()}
                    <a href="/" onClick={handleReadMore}> Show Less</a>
            </p>
          ) : (
            <p id="desc_short">
             {descriptionShort}
              <a href="/" onClick={handleReadMore}> Read More</a>
            </p>
          )}
        </div>
      </div>
    </div>

  )
}

export default Description
